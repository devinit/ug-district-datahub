from django.forms import Media, widgets
from django.db import models
from django.db.models import JSONField

from wagtail.admin.staticfiles import versioned_static
from wagtail.blocks.field_block import BooleanBlock
from wagtail.fields import StreamField
from wagtail.images.blocks import ImageChooserBlock
from wagtail.contrib.table_block.blocks import TableBlock
from wagtail.blocks import (
    CharBlock,
    ListBlock,
    RichTextBlock,
    StreamBlock,
    StructBlock,
    TextBlock,
    URLBlock,
    PageChooserBlock,
)
from wagtail.snippets.blocks import SnippetChooserBlock

from common.constants import RICHTEXT_FEATURES
from common.blocks import (
    AccordionBlock,
    AnchorBlock,
    CallToActionBlock,
    SectionBlockQuote,
)


class AceEditorInput(widgets.HiddenInput):
    template_name = "dashboard/widgets/ace-editor.html"

    def __init__(self, options=None, **kwargs):
        self.options = options
        super().__init__(**kwargs)

    @property
    def media(self):
        return Media(
            css={"all": ("dashboard/widgets/css/ace-editor.css",)},
            js=[
                versioned_static(
                    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.11.2/ace.min.js"
                ),
                versioned_static(
                    "https://cdnjs.cloudflare.com/ajax/libs/ace/1.11.2/theme-monokai.min.js"
                ),
                versioned_static("dashboard/widgets/js/ace-editor.js"),
                # versioned_static('https://cdn.plot.ly/plotly-basic-latest.min.js')
            ],
        )

    def get_context(self, name, value, attrs):
        context = super().get_context(name, value, attrs)
        context["widget"]["options"] = self.options
        return context


class AceEditorJSONField(JSONField):
    def __init__(self, *args, **kwargs):
        self.options = kwargs.pop("options", {"mode": "json"})
        super().__init__(*args, **kwargs)

    def formfield(self, **kwargs):
        options = self.options
        options.mode = "json"
        defaults = {"widget": AceEditorInput(options=options)}
        defaults.update(kwargs)
        return super().formfield(**defaults)


class AceEditorField(models.TextField):
    """
    Handles any data type e.g. HTML, CSS, JavaScript
    """

    def __init__(self, *args, **kwargs):
        self.options = kwargs.pop("options", {"mode": "json"})
        super().__init__(*args, **kwargs)

    def formfield(self, **kwargs):
        defaults = {"widget": AceEditorInput(options=self.options)}
        defaults.update(kwargs)
        return super().formfield(**defaults)


class CaptionedImage(StructBlock):
    class Meta:
        help_text = "Displays an image with an optionally linked caption."
        icon = "image"
        label = "Captioned image"
        form_template = "dashboard/block_forms/custom_struct.html"
        template = "dashboard/blocks/captioned_image.html"

    image = ImageChooserBlock(help_text="Optimal minimum width 800px")
    descriptive_text = RichTextBlock(
        required=False,
        features=RICHTEXT_FEATURES,
        help_text="Optional: descriptive text to appear above the image",
    )
    caption = TextBlock(
        required=False, help_text="Optional: caption text to appear below the image"
    )
    caption_link = URLBlock(
        required=False, help_text="Optional: external link to appear below the image"
    )
    caption_label = CharBlock(
        required=False,
        help_text="Optional: label for the caption link, defaults to the link if left blank",
    )


class DefinitionList(StructBlock):
    class Meta:
        help_text = "Displays a list of terms and definitions."
        icon = "list-ul"
        label = "Definition list"
        form_template = "dashboard/block_forms/custom_struct.html"
        template = "dashboard/blocks/definition_list.html"

    definitions = ListBlock(
        StructBlock(
            [
                ("term", CharBlock()),
                ("definition", TextBlock()),
            ]
        ),
        icon="list-ul",
    )


class Downloads(StructBlock):
    class Meta:
        help_text = "Displays a list of file downloads or external URLs."
        icon = "list-ul"
        label = "Download list"
        form_template = "dashboard/block_forms/custom_struct.html"
        form_classname = "custom__itemlist struct-block"
        template = "dashboard/blocks/downloads.html"

    downloads = StreamBlock(
        [
            (
                "file",
                StructBlock(
                    [
                        ("file", SnippetChooserBlock("downloads.DashboardDownload")),
                    ],
                    icon="doc-empty",
                    label="File",
                ),
            ),
            (
                "url",
                StructBlock(
                    [
                        ("label", CharBlock()),
                        ("url", URLBlock()),
                    ],
                    icon="site",
                    label="URL",
                ),
            ),
        ],
    )


class SectionHeading(StructBlock):
    class Meta:
        help_text = "Displays a heading for a content section."
        icon = "title"
        label = "Section heading"
        form_template = "dashboard/block_forms/custom_struct.html"
        template = "dashboard/blocks/section_heading.html"

    section_id = CharBlock(
        help_text='Prepended by a chapter number if available, this value should be unique to the page, e.g. "1", "1.1", "2", "2.1" etc.'
    )
    heading = CharBlock()


class Table(StructBlock):
    class Meta:
        help_text = "Displays tabular data with an optional heading."
        icon = "list-ol"
        label = "Table"
        form_template = "dashboard/block_forms/custom_struct.html"
        template = "dashboard/blocks/table.html"

    heading = CharBlock(required=False)
    table = TableBlock()
    caption = RichTextBlock(
        required=False,
        features=RICHTEXT_FEATURES,
        help_text="Optional: caption text to appear below the table",
    )
    caption_link = URLBlock(
        required=False, help_text="Optional: external link to appear below the table"
    )
    caption_label = CharBlock(
        required=False,
        help_text="Optional: label for the caption link, defaults to the link if left blank",
    )


class PivotTable(StructBlock):
    class Meta:
        help_text = (
            "Uses a CSV data source to displays tabular data with an optional title."
        )
        icon = "table"
        label = "Pivot Table"
        form_template = "dashboard/block_forms/custom_struct.html"
        template = "dashboard/blocks/pivot-table.html"

    show_title = BooleanBlock(required=False, default=True)
    pivot_table = PageChooserBlock(page_type=["dashboard.PivotTable"])

    def get_context(self, value, parent_context=None):
        context = super().get_context(value, parent_context=parent_context)
        pivot_table = value["pivot_table"]
        context["table"] = (
            pivot_table.specific if pivot_table and pivot_table.live else ""
        )
        return context


class DynamicTable(StructBlock):
    class Meta:
        help_text = (
            "Uses a CSV data source to display tabular data with an optional heading."
        )
        icon = "table"
        label = "Dynamic Table"
        form_template = "dashboard/block_forms/custom_struct.html"
        template = "dashboard/blocks/dynamic-table.html"

    heading = CharBlock(required=False)
    data_source_url = URLBlock(help_text="Link to the CSV data file")
    caption = RichTextBlock(
        required=False,
        features=RICHTEXT_FEATURES,
        help_text="Optional: caption text to appear below the table",
    )
    caption_link = URLBlock(
        required=False, help_text="Optional: external link to appear below the table"
    )
    caption_label = CharBlock(
        required=False,
        help_text="Optional: label for the caption link, defaults to the link if left blank",
    )


class AbstractRichText(StructBlock):
    class Meta:
        abstract = True
        help_text = "Displays rich text content edited via a WYSIWYG editor"
        icon = "doc-full"
        label = "WYSIWYG editor"
        form_template = "dashboard/block_forms/custom_struct.html"


class RichText(AbstractRichText):
    class Meta:
        template = "dashboard/blocks/rich_text.html"

    rich_text = RichTextBlock(
        features=RICHTEXT_FEATURES,
    )


class InteractiveChartBlock(StructBlock):
    class Meta:
        help_text = "Select a chart page"
        icon = "fa-area-chart"
        label = "Interactive Chart"
        template = "dashboard/blocks/interactive_chart.html"
        form_template = "dashboard/block_forms/custom_struct.html"

    show_title = BooleanBlock(required=False, default=True)
    allow_share = BooleanBlock(required=False, default=True)
    chart_page = PageChooserBlock(
        page_type=["dashboard.ChartPage", "dashboard.RawCodePage"]
    )

    def get_context(self, value, parent_context=None):
        context = super().get_context(value, parent_context=parent_context)
        chart_page = value["chart_page"]
        context["chart"] = chart_page.specific if chart_page and chart_page.live else ""
        return context


def flexible_content_streamfield(blank=False):
    return StreamField(
        [
            ("captioned_image", CaptionedImage()),
            (
                "block_quote",
                SectionBlockQuote(template="blocks/publication_blockquote.html"),
            ),
            ("downloads", Downloads()),
            ("section_heading", SectionHeading()),
            ("table", Table()),
            ("pivot_table", PivotTable()),
            ("dynamic_table", DynamicTable()),
            ("rich_text", RichText()),
            ("anchor", AnchorBlock()),
            ("interactive_chart", InteractiveChartBlock()),
            ("cta", CallToActionBlock()),
            ("accordion", AccordionBlock()),
        ],
        blank=blank,
        use_json_field=True,
    )


def content_streamfield(blank=False):
    return StreamField(
        [
            ("captioned_image", CaptionedImage()),
            ("definition_list", DefinitionList()),
            ("table", Table()),
            ("rich_text", RichText()),
            ("anchor", AnchorBlock()),
        ],
        blank=blank,
        use_json_field=True,
    )
