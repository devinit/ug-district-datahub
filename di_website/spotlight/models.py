from django.db import models
from django.shortcuts import redirect
from django.http import Http404

from wagtail.search import index
from wagtail.models import Page
from wagtail.fields import StreamField, RichTextField
from wagtail.admin.panels import FieldPanel, MultiFieldPanel
from wagtail.blocks import (
    CharBlock,
    PageChooserBlock,
    StructBlock,
    RichTextBlock,
    ChoiceBlock,
    TextBlock
)

from .snippets import SpotlightColour

from di_website.common.blocks import AceEditorStreamBlock, LinkBlock
from di_website.common.base import hero_panels
from di_website.common.mixins import HeroMixin, TypesetBodyMixin
from di_website.common.constants import RICHTEXT_FEATURES_NO_FOOTNOTES


class SpotlightPage(HeroMixin, Page):
    class Meta():
        verbose_name = 'Spotlight Page'

    parent_page_types = ['datasection.DataSectionPage']
    subpage_types = ['spotlight.SpotlightLocationComparisonPage', 'spotlight.SpotlightTheme', 'general.General']

    country_code = models.CharField(max_length=100, help_text='e.g. UG, KE', default='')
    country_name = models.CharField(max_length=255)
    currency_code = models.CharField(max_length=100, help_text='UGX, KES', default='')
    datasources_description = models.TextField(
        help_text='A description for data sources section', null=True, blank=True, verbose_name='Description')
    datasources_links = StreamField([('link', LinkBlock()), ], null=True, blank=True, verbose_name='Links', use_json_field=True)
    content_panels = Page.content_panels + [
        hero_panels(),
        MultiFieldPanel([
            FieldPanel('country_code'),
            FieldPanel('country_name'),
            FieldPanel('currency_code')
        ], heading='Settings'),
        MultiFieldPanel([
            FieldPanel('datasources_description'),
            FieldPanel('datasources_links')
        ], heading='Data Sources Section')
    ]


    def serve(self, request, *args, **kwargs):
        return redirect(self.url)


class SpotlightLocationComparisonPage(Page):
    default_locations = StreamField([
        ('locations', StructBlock([
            ('name', TextBlock()),
            ('geocode', TextBlock()),
        ]))
    ], null=True, blank=True, verbose_name='Default Locations', use_json_field=True)
    content_panels = Page.content_panels + [
        FieldPanel('default_locations'),
    ]

    parent_page_types = ['spotlight.SpotlightPage']

    class Meta():
        verbose_name = 'Spotlight Location Comparison Page'


    def serve(self, request, *args, **kwargs):
        return redirect(self.url)


class SpotlightTheme(Page):
    class Meta():
        verbose_name = 'Spotlight Theme'

    parent_page_types = [SpotlightPage]

    section = models.CharField(
        max_length=200,
        blank=True,
        null=True,
        help_text='Determines which section on the spotlights a particular theme and its indicators appears e.g map,facts')

    content_panels = Page.content_panels +  [
        FieldPanel('section'),
    ]

    def get_admin_display_title(self):
        if self.section:
            if self.section == 'map':
                return '[Map Section] - ' + self.draft_title.upper() if self.section else self.draft_title.upper()

            if self.section == 'facts':
                return '[Location Key Facts Section] - ' + self.draft_title.upper() if self.section else self.draft_title.upper()

            if self.section == 'country-facts':
                return '[Country Key Facts Section] - ' + self.draft_title.upper() if self.section else self.draft_title.upper()

            if self.section == 'revenue-expenditure':
                return '[Revenue/Expenditure/Finance Section] - ' + self.draft_title.upper() if self.section else self.draft_title.upper()

            return '[' + self.section + '] - ' + self.draft_title.upper() if self.section else self.draft_title.upper()
        else:
            return self.title


    def serve(self, request, *args, **kwargs):
        raise Http404()

    def serve_preview(self, request, mode_name):
        return self.get_parent().serve(request)


class SpotlightIndicator(Page):
    class Meta():
        verbose_name = 'Spotlight Indicator'

    parent_page_types = [SpotlightTheme]

    ddw_id = models.CharField(max_length=255)
    description = models.TextField(help_text='A description of this indicator', null=True, blank=True)
    source = models.TextField(help_text='Where is the data from?', null=True, blank=True)
    color = models.ForeignKey(
        SpotlightColour,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    start_year = models.IntegerField(blank=True, null=True)
    end_year = models.IntegerField(blank=True, null=True)
    excluded_years = models.TextField(help_text='Comma separated values e.g. 2002,2004,2017', blank=True, null=True)
    DATA_FORMAT_CHOICES = [
        ('percent', 'Percentage'),
        ('plain', 'Plain'),
        ('currency', 'Currency')
    ]
    data_format = models.TextField(
        max_length=100,
        choices=DATA_FORMAT_CHOICES,
        default='plain',
        help_text='Options are plain, currency, percent')
    range = models.CharField(max_length=100, null=True, blank=True, help_text='The range of values shown on the legend')
    value_prefix = models.CharField(max_length=100, null=True, blank=True)
    value_suffix = models.CharField(max_length=100, null=True, blank=True)
    tooltip_template = models.TextField(
        blank=True,
        null=True,
        help_text='Text for the tooltip.Template strings can be used to substitute values e.g. {name}')
    config = StreamField(
        AceEditorStreamBlock(max_num=1, block_counts={'JSON': {'max_num':1}}),
        null=True, blank=True, verbose_name='JSON Config', use_json_field=True)

    content_panels = Page.content_panels +  [
        FieldPanel('ddw_id'),
        FieldPanel('description'),
        FieldPanel('source'),
        FieldPanel('color'),
        FieldPanel('start_year'),
        FieldPanel('end_year'),
        FieldPanel('excluded_years'),
        FieldPanel('data_format'),
        FieldPanel('range'),
        FieldPanel('value_prefix'),
        FieldPanel('value_suffix'),
        FieldPanel('tooltip_template'),
        FieldPanel('config')
    ]

    search_fields = Page.search_fields + [
        index.SearchField('ddw_id')
    ]


    def serve(self, request, *args, **kwargs):
        raise Http404()

    def serve_preview(self, request, mode_name):
        return self.get_parent().serve(request)


class CountrySpotlight(TypesetBodyMixin, HeroMixin, Page):
    content_panels = Page.content_panels + [
        hero_panels(),
        FieldPanel('body')
    ]

    parent_page_types = ['datasection.DataSectionPage']
    subpage_types = ['spotlight.SpotlightPage', 'general.General']

    class Meta():
        verbose_name = 'Country Spotlights Page'


    def get_context(self, request, *args, **kwargs):
        context = super().get_context(request, *args, **kwargs)
        context['spotlights'] = self.get_children().specific().type(SpotlightPage).live()

        return context

    class Meta():
        verbose_name = 'Country Spotlight'


    def serve(self, request, *args, **kwargs):
        return redirect(self.get_parent().url)
