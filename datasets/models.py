import re

from django.db import models
from django.utils.functional import cached_property
from django.utils.text import slugify
from django.core.paginator import EmptyPage, PageNotAnInteger, Paginator

from modelcluster.fields import ParentalKey
from modelcluster.models import ClusterableModel

from wagtail.admin.panels import FieldPanel, InlinePanel, MultiFieldPanel
from wagtail.models import Orderable, Page
from wagtail.snippets.models import register_snippet

from common.constants import MAX_RELATED_LINKS, MAX_PAGE_SIZE
from common.mixins import HeroMixin, TypesetBodyMixin
from common.utils import get_paginator_range, hero_panels
from datasets.mixins import DataSetMixin
from datasets.panels import metadata_panel
from dashboard.models import District
from downloads.models import BaseDownload


class DatasetPage(DataSetMixin, TypesetBodyMixin, HeroMixin, Page):
    """ Content of each dataset """

    class Meta():
        verbose_name = 'Dataset Page'

    dataset_title = models.TextField(unique=True, blank=True, null=True)
    related_datasets_title = models.CharField(
        blank=True,
        max_length=255,
        default='Related datasets',
        verbose_name='Section Title'
    )

    content_panels = Page.content_panels + [
        hero_panels(),
        FieldPanel('dataset_title'),
        FieldPanel('release_date'),
        FieldPanel('body'),
        InlinePanel('dataset_downloads', label='Downloads', max_num=None),
        metadata_panel(),
        MultiFieldPanel([
            FieldPanel('related_datasets_title'),
        ], heading='Related Datasets'),
    ]

    def get_context(self, request):
        context = super().get_context(request)

        context['topics'] = [orderable.topic for orderable in self.dataset_topics.all()]
        context['related_datasets'] = self.get_related_dataset_pages()
        context['dashboards'] = self.get_usages()

        return context

    @cached_property
    def get_dataset_downloads(self):
        return self.dataset_downloads.all()

    def get_usages(self):
        dashboards = Page.objects.live().filter(
            models.Q(narrativedashboardpage__dashboard_datasets__dataset__slug=self.slug)
        ).specific()

        return dashboards

    def get_download_name(self):
        return self.title

    def get_related_dataset_pages(self, min_len=MAX_RELATED_LINKS):
        count = 0
        queryset = Page.objects.none()
        # TODO: use datasets from the same district and with the same topic

        return list(queryset)


@register_snippet
class DataTopic(ClusterableModel):
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(
        max_length=255, blank=True, null=True,
        help_text="Optional: will be auto-generated from name if left blank.")
    panels = [
        FieldPanel('name'),
        FieldPanel('slug'),
    ]

    class Meta:
        ordering = ["name"]
        verbose_name_plural = 'Data Topics'

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(DataTopic, self).save(*args, **kwargs)


class DatasetPageTopic(Orderable):
    page = ParentalKey(DatasetPage, related_name='dataset_topics', on_delete=models.CASCADE)
    topic = models.ForeignKey(DataTopic, related_name="+", null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return self.topic.name


class DatasetDownloads(Orderable, BaseDownload):
    page = ParentalKey(DatasetPage, related_name='dataset_downloads', on_delete=models.CASCADE)


class DatasetListing(HeroMixin, Page):
    class Meta():
        verbose_name = 'Dataset Listing'

    parent_page_types = ['home.HomePage']
    subpage_types = ['datasets.DatasetPage']

    content_panels = Page.content_panels + [
        hero_panels(),
    ]

    def is_filtering(self, request):
        get = request.GET.get
        return get('topic', None) or get('district', None) or get('q', None)

    def fetch_all_data(self):
        return DatasetPage.objects.live().specific()

    def get_active_districts(self):
        active_districts = []
        datasets = DatasetPage.objects.all()

        for dataset in datasets:
            districts = dataset.page_districts.all()
            for district in districts:
                active_district = District.objects.get(id=district.district_id)
                if active_district not in active_districts:
                    active_districts.append(active_district)
        return active_districts

    def fetch_all_data(self):
        return DatasetPage.objects.live().specific()

    def fetch_filtered_data(self, context):
        topic = context['selected_topic']
        district = context['selected_district']
        query = context['q']

        if not (topic or district or query):
            return self.fetch_all_data()

        if topic:
            datasets = DatasetPage.objects.live().specific().filter(dataset_topics__topic__slug=topic)
        else:
            datasets = self.fetch_all_data()

        if district:
            if 'all--' in district:
                try:
                    region = re.search('all--(.*)', district).group(1)
                    datasets = datasets.filter(page_districts__district__region__name=region)
                except AttributeError:
                    pass
            else:
                datasets = datasets.filter(page_districts__district__slug=district)

        return datasets

    def get_context(self, request, *args, **kwargs):
        context = super(DatasetListing, self).get_context(request, *args, **kwargs)

        page = request.GET.get('page', None)
        search_filter = request.GET.get('q', None)

        context['selected_district'] = request.GET.get('district', None)
        context['selected_topic'] = request.GET.get('topic', None)
        context['q'] = search_filter

        if not self.is_filtering(request):
            datasets = self.fetch_all_data()
            is_filtered = False
        else:
            is_filtered = True
            datasets = self.fetch_filtered_data(context)

        datasets = datasets.order_by('-first_published_at') if datasets else []
        context['is_filtered'] = is_filtered
        paginator = Paginator(datasets, MAX_PAGE_SIZE)
        try:
            context['datasets'] = paginator.page(page)
        except PageNotAnInteger:
            context['datasets'] = paginator.page(1)
        except EmptyPage:
            context['datasets'] = paginator.page(paginator.num_pages)

        context['paginator_range'] = get_paginator_range(paginator, context['datasets'])

        context['topics'] = [page_orderable.topic for page_orderable in DatasetPageTopic.objects.all().order_by('topic__name') if page_orderable.page.live]
        context['districts'] = self.get_active_districts()

        return context
