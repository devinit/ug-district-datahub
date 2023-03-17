from django.db import models
from django.http import Http404
from django.utils.functional import cached_property

from modelcluster.fields import ParentalKey

from wagtail.models import Page, Orderable
from wagtail.admin.panels import FieldPanel, MultiFieldPanel, InlinePanel

from common.edit_handlers import HelpPanel
from dashboard.fields import AceEditorField
from dashboard.mixins import (
    CaptionMixin, CodePageMixin, InstructionsMixin, FallbackImageMixin
)
from dashboard.utils import CaptionPanel, InstructionsPanel, FallbackImagePanel


class VisualisationsPage(InstructionsMixin, Page):
    """
    Parent page for all visualisations
    """
    parent_page_types = ['home.HomePage', 'dashboard.VisualisationsPage']
    subpage_types = [
        'dashboard.VisualisationsPage',
        'dashboard.AdvancedChartPage',
        'dashboard.RawCodePage',
        'dashboard.PivotTable',
    ]

    class Meta:
        verbose_name = 'Visualisations Page'

    header_assets = AceEditorField(
        options={'mode':'html'},
        blank=True,
        default='{% load wagtailcore_tags %}',
        help_text='Optional: code that should be added to document head e.g. CSS'
    )
    footer_assets = AceEditorField(
        options={'mode':'html'},
        blank=True,
        default='{% load wagtailcore_tags %}',
        help_text='Optional: code that should be added to bottom of the document body e.g. JavaScript'
    )

    no_js_text = models.CharField(
        max_length=255,
        default='To view this interactive visualisation make sure JavaScript is available on your device.',
        help_text='Text that is displayed for all charts when the user does not have JavaScript available',
    )

    larger_screen_text = models.CharField(
        max_length=255,
        default='To view this interactive visualisation use a device with a larger screen.',
        help_text='Text that is displayed for individual charts when the user\'s screen is less than the minimum width defined in the chart page',
    )

    content_panels = Page.content_panels + [
        MultiFieldPanel(
            [
                FieldPanel('header_assets'),
                FieldPanel('footer_assets'),
            ],
            heading='Assets'
        ),
        MultiFieldPanel(
            [
                HelpPanel('''
                    Fallback text displayed for charts when JavaScript is unavailable or screen size is less than the defined minimum width.
                ''', wrapper_class='help-block help-info no-padding-top'),
                FieldPanel('no_js_text'),
                FieldPanel('larger_screen_text'),
            ],
            heading='Fallback text',
        ),
        MultiFieldPanel(
            [
                HelpPanel('''
                    Optional: a general set of instructions that can be selected to display with child visualisation content.
                ''', wrapper_class='help-block help-info no-padding-top'),
                FieldPanel('instructions'),
                FieldPanel('instruction_position'),

            ],
            heading='Interactive visualisation instructions',
        ),
    ]

    def get_sitemap_urls(self, request):
        return []

    def serve(self, request, *args, **kwargs):
        raise Http404()

    def serve_preview(self, request, mode_name):
        raise Http404()


class AdvancedChartPage(FallbackImageMixin, CodePageMixin, Page):
    """
    A code based chart page for advanced users
    """
    parent_page_types = [VisualisationsPage]
    subpage_types = []

    content_panels = CodePageMixin.content_panels + [
        FallbackImagePanel(),
    ]

    class Meta:
        verbose_name = 'Advanced Chart Page'


class RawCodePage(CodePageMixin, Page):
    """
    A code based page for anything really, rendered in a nicely formated card
    """
    parent_page_types = [VisualisationsPage]
    subpage_types = []

    class Meta:
        verbose_name = 'Raw Code Snippet'


class PivotTableRowHighlight(Orderable):
    HIGHLIGHT_CONDITION = [
        ('lt', 'Less Than'),
        ('gt', 'Greater Than'),
        ('eq', 'Equals'),
        ('lte', 'Less Than or Equal'),
        ('gte', 'Greater Than or Equal'),
    ]

    page = ParentalKey('dashboard.PivotTable', related_name='row_highlights', on_delete=models.CASCADE)
    row_highlight_field = models.CharField(
        blank=True,
        null=True,
        max_length=100,
        verbose_name='Column/Field',
        help_text='Optional: value of the column for which to conditionally highlight row'
    )
    row_highlight_condition = models.CharField(
        blank=True,
        null=True,
        max_length=5,
        choices=HIGHLIGHT_CONDITION,
        default='lt',
        verbose_name='Condition',
        help_text='Optional: condition for highlighting a row'
    )
    row_highlight_value = models.CharField(
        blank=True,
        null=True,
        max_length=200,
        verbose_name='Column value',
        help_text='Optional: column value to conditionally highlight row'
    )
    row_highlight_colour = models.CharField(
        blank=True,
        max_length=256,
        default='#ffb3b3',
        help_text='Optional: HTML colour of highlighted row - when in doubt, refer to https://htmlcolors.com/'
    )


class PivotTable(InstructionsMixin, CaptionMixin, Page):
    parent_page_types = [VisualisationsPage]
    subpage_types = []
    template = 'dashboard/pivot_table_page.html'

    HIGHLIGHT_CONDITION = [
        ('lt', 'Less Than'),
        ('gt', 'Greater Than'),
        ('eq', 'Equals'),
        ('lte', 'Less Than or Equal'),
        ('gte', 'Greater Than or Equal'),
    ]

    data_source_url = models.TextField(help_text='Link to the CSV data file')
    row_label = models.CharField(max_length=200, help_text='CSV column to show as the label for each table row')
    row_label_heading = models.CharField(max_length=200, default='Row labels', blank=True, null=True, help_text='Optional: heading of the row label column')
    column_label = models.CharField(max_length=200, help_text='CSV column to show as the label for each table column')
    cell_value = models.CharField(max_length=200, help_text='CSV column whose data shall appear in the table cells')
    show_row_total = models.BooleanField(default=True, blank=True)
    show_column_total = models.BooleanField(default=True, blank=True)
    filter_by = models.TextField(
        blank=True,
        null=True,
        help_text='Optional: taken from the CSV data file - comma separated column names to filter by'
    )
    default_filter_values = models.TextField(
        blank=True,
        null=True,
        help_text='Optional: Comma separated values to match the provided filters'
    )
    cell_highlight_condition = models.CharField(
        blank=True,
        null=True,
        max_length=5,
        choices=HIGHLIGHT_CONDITION,
        default='lt',
        verbose_name='Cell Condition',
        help_text='Optional: condition for highlighting cells'
    )
    cell_highlight_value = models.IntegerField(
        blank=True,
        null=True,
        verbose_name='Cell value',
        help_text='Optional: value to conditionally highlight cells'
    )

    content_panels = Page.content_panels + [
        FieldPanel('data_source_url'),
        MultiFieldPanel([
            FieldPanel('row_label'),
            FieldPanel('column_label'),
            FieldPanel('cell_value'),
            FieldPanel('row_label_heading'),
        ], heading='Table Data Config'),
        MultiFieldPanel([
            FieldPanel('show_row_total'),
            FieldPanel('show_column_total'),
        ], heading='Totals'),
        MultiFieldPanel([
            FieldPanel('filter_by'),
            FieldPanel('default_filter_values'),
        ], heading='Filters'),
        MultiFieldPanel([
            FieldPanel('cell_highlight_condition'),
            FieldPanel('cell_highlight_value'),
        ], heading='Highlight Cell'),
        MultiFieldPanel([
            InlinePanel('row_highlights', label='Row Highlight'),
        ], heading="Highlight Row"),
        InstructionsPanel(),
        CaptionPanel(),
    ]


    @cached_property
    def instructions_text(self):
        if self.instructions:
            return self.instructions

        return ''

    class Meta:
        verbose_name = 'Pivot Table'
