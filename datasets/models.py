from django.db import models
from django.utils.functional import cached_property
from django.utils.text import slugify

from modelcluster.fields import ParentalKey
from modelcluster.models import ClusterableModel

from wagtail.admin.panels import FieldPanel, InlinePanel, MultiFieldPanel
from wagtail.models import Orderable, Page
from wagtail.snippets.models import register_snippet

from common.constants import MAX_RELATED_LINKS
from common.mixins import HeroMixin, TypesetBodyMixin
from common.utils import hero_panels
from datasets.mixins import DataSetMixin
from datasets.panels import metadata_panel
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
            models.Q(dashboardpage__dashboard_datasets__dataset__slug=self.slug)
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


class DataSetListing(TypesetBodyMixin, HeroMixin, Page):
    class Meta():
        verbose_name = 'DataSet Listing'

    parent_page_types = ['home.HomePage']
    subpage_types = ['datasets.DatasetPage']

    content_panels = Page.content_panels + [
        hero_panels(),
        FieldPanel('body'),
    ]

    def is_filtering(self, request):
        get = request.GET.get
        return get('topic', None) or get('district', None) or get('search', None)

    def fetch_all_data(self):
        return DatasetPage.objects.live().specific()
