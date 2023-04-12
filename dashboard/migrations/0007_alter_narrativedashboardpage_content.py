# Generated by Django 4.1.7 on 2023-04-12 12:17

from django.db import migrations
import wagtail.blocks
import wagtail.contrib.table_block.blocks
import wagtail.fields
import wagtail.images.blocks
import wagtail.snippets.blocks


class Migration(migrations.Migration):
    dependencies = [
        ("dashboard", "0006_alter_narrativedashboardpage_content"),
    ]

    operations = [
        migrations.AlterField(
            model_name="narrativedashboardpage",
            name="content",
            field=wagtail.fields.StreamField(
                [
                    (
                        "captioned_image",
                        wagtail.blocks.StructBlock(
                            [
                                (
                                    "image",
                                    wagtail.images.blocks.ImageChooserBlock(help_text="Optimal minimum width 800px"),
                                ),
                                (
                                    "descriptive_text",
                                    wagtail.blocks.RichTextBlock(
                                        features=[
                                            "h2",
                                            "h3",
                                            "h4",
                                            "bold",
                                            "italic",
                                            "ol",
                                            "ul",
                                            "hr",
                                            "link",
                                            "document-link",
                                            "image",
                                            "embed",
                                        ],
                                        help_text="Optional: descriptive text to appear above the image",
                                        required=False,
                                    ),
                                ),
                                (
                                    "caption",
                                    wagtail.blocks.TextBlock(
                                        help_text="Optional: caption text to appear below the image", required=False
                                    ),
                                ),
                                (
                                    "caption_link",
                                    wagtail.blocks.URLBlock(
                                        help_text="Optional: external link to appear below the image", required=False
                                    ),
                                ),
                                (
                                    "caption_label",
                                    wagtail.blocks.CharBlock(
                                        help_text="Optional: label for the caption link, defaults to the link if left blank",
                                        required=False,
                                    ),
                                ),
                            ]
                        ),
                    ),
                    (
                        "block_quote",
                        wagtail.blocks.StructBlock(
                            [
                                ("text", wagtail.blocks.TextBlock()),
                                (
                                    "source",
                                    wagtail.blocks.TextBlock(
                                        help_text="Who is this quote acredited to?", required=False
                                    ),
                                ),
                                ("center", wagtail.blocks.BooleanBlock(default=False, required=False)),
                            ],
                            template="blocks/publication_blockquote.html",
                        ),
                    ),
                    (
                        "downloads",
                        wagtail.blocks.StructBlock(
                            [
                                (
                                    "downloads",
                                    wagtail.blocks.StreamBlock(
                                        [
                                            (
                                                "file",
                                                wagtail.blocks.StructBlock(
                                                    [
                                                        (
                                                            "file",
                                                            wagtail.snippets.blocks.SnippetChooserBlock(
                                                                "downloads.DashboardDownload"
                                                            ),
                                                        )
                                                    ],
                                                    icon="doc-empty",
                                                    label="File",
                                                ),
                                            ),
                                            (
                                                "url",
                                                wagtail.blocks.StructBlock(
                                                    [
                                                        ("label", wagtail.blocks.CharBlock()),
                                                        ("url", wagtail.blocks.URLBlock()),
                                                    ],
                                                    icon="site",
                                                    label="URL",
                                                ),
                                            ),
                                        ]
                                    ),
                                )
                            ]
                        ),
                    ),
                    (
                        "section_heading",
                        wagtail.blocks.StructBlock(
                            [
                                (
                                    "section_id",
                                    wagtail.blocks.CharBlock(
                                        help_text='Prepended by a chapter number if available, this value should be unique to the page, e.g. "1", "1.1", "2", "2.1" etc.'
                                    ),
                                ),
                                ("heading", wagtail.blocks.CharBlock()),
                            ]
                        ),
                    ),
                    (
                        "table",
                        wagtail.blocks.StructBlock(
                            [
                                ("heading", wagtail.blocks.CharBlock(required=False)),
                                ("table", wagtail.contrib.table_block.blocks.TableBlock()),
                                (
                                    "caption",
                                    wagtail.blocks.RichTextBlock(
                                        features=[
                                            "h2",
                                            "h3",
                                            "h4",
                                            "bold",
                                            "italic",
                                            "ol",
                                            "ul",
                                            "hr",
                                            "link",
                                            "document-link",
                                            "image",
                                            "embed",
                                        ],
                                        help_text="Optional: caption text to appear below the table",
                                        required=False,
                                    ),
                                ),
                                (
                                    "caption_link",
                                    wagtail.blocks.URLBlock(
                                        help_text="Optional: external link to appear below the table", required=False
                                    ),
                                ),
                                (
                                    "caption_label",
                                    wagtail.blocks.CharBlock(
                                        help_text="Optional: label for the caption link, defaults to the link if left blank",
                                        required=False,
                                    ),
                                ),
                            ]
                        ),
                    ),
                    (
                        "pivot_table",
                        wagtail.blocks.StructBlock(
                            [
                                ("show_title", wagtail.blocks.BooleanBlock(default=True, required=False)),
                                ("pivot_table", wagtail.blocks.PageChooserBlock(page_type=["dashboard.PivotTable"])),
                            ]
                        ),
                    ),
                    (
                        "dynamic_table",
                        wagtail.blocks.StructBlock(
                            [
                                ("heading", wagtail.blocks.CharBlock(required=False)),
                                ("data_source_url", wagtail.blocks.URLBlock(help_text="Link to the CSV data file")),
                                (
                                    "caption",
                                    wagtail.blocks.RichTextBlock(
                                        features=[
                                            "h2",
                                            "h3",
                                            "h4",
                                            "bold",
                                            "italic",
                                            "ol",
                                            "ul",
                                            "hr",
                                            "link",
                                            "document-link",
                                            "image",
                                            "embed",
                                        ],
                                        help_text="Optional: caption text to appear below the table",
                                        required=False,
                                    ),
                                ),
                                (
                                    "caption_link",
                                    wagtail.blocks.URLBlock(
                                        help_text="Optional: external link to appear below the table", required=False
                                    ),
                                ),
                                (
                                    "caption_label",
                                    wagtail.blocks.CharBlock(
                                        help_text="Optional: label for the caption link, defaults to the link if left blank",
                                        required=False,
                                    ),
                                ),
                            ]
                        ),
                    ),
                    (
                        "rich_text",
                        wagtail.blocks.StructBlock(
                            [
                                (
                                    "rich_text",
                                    wagtail.blocks.RichTextBlock(
                                        features=[
                                            "h2",
                                            "h3",
                                            "h4",
                                            "bold",
                                            "italic",
                                            "ol",
                                            "ul",
                                            "hr",
                                            "link",
                                            "document-link",
                                            "image",
                                            "embed",
                                        ]
                                    ),
                                )
                            ]
                        ),
                    ),
                    (
                        "anchor",
                        wagtail.blocks.StructBlock(
                            [
                                (
                                    "anchor_id",
                                    wagtail.blocks.CharBlock(
                                        help_text="The unique indentifier for this anchor", required=True
                                    ),
                                )
                            ]
                        ),
                    ),
                    (
                        "interactive_chart",
                        wagtail.blocks.StructBlock(
                            [
                                ("show_title", wagtail.blocks.BooleanBlock(default=True, required=False)),
                                ("allow_share", wagtail.blocks.BooleanBlock(default=True, required=False)),
                                (
                                    "chart_page",
                                    wagtail.blocks.PageChooserBlock(
                                        page_type=["dashboard.ChartPage", "dashboard.RawCodePage"]
                                    ),
                                ),
                            ]
                        ),
                    ),
                    (
                        "cta",
                        wagtail.blocks.StructBlock(
                            [
                                ("title", wagtail.blocks.CharBlock(label="Title", required=True)),
                                (
                                    "body",
                                    wagtail.blocks.TextBlock(
                                        help_text="Optional: describe the purpose of your call to action in a bit more detail",
                                        label="Description",
                                        required=False,
                                    ),
                                ),
                                (
                                    "button_text",
                                    wagtail.blocks.CharBlock(
                                        help_text="Optional: this is required to show the button",
                                        label="Button Caption",
                                        required=False,
                                    ),
                                ),
                                (
                                    "button_url",
                                    wagtail.blocks.URLBlock(
                                        help_text="Optional: this is required to show the button",
                                        label="Button URL",
                                        required=False,
                                    ),
                                ),
                                (
                                    "button_page",
                                    wagtail.blocks.PageChooserBlock(
                                        help_text="Optional: has priority over the button URL field",
                                        label="Button Page",
                                        required=False,
                                    ),
                                ),
                            ]
                        ),
                    ),
                    (
                        "accordion",
                        wagtail.blocks.StructBlock(
                            [
                                (
                                    "accordion_items",
                                    wagtail.blocks.ListBlock(
                                        wagtail.blocks.StructBlock(
                                            [
                                                ("name", wagtail.blocks.TextBlock(icon="fa-text")),
                                                (
                                                    "description",
                                                    wagtail.blocks.RichTextBlock(
                                                        features=[
                                                            "h2",
                                                            "h3",
                                                            "h4",
                                                            "bold",
                                                            "italic",
                                                            "ol",
                                                            "ul",
                                                            "hr",
                                                            "link",
                                                            "document-link",
                                                            "image",
                                                            "embed",
                                                        ],
                                                        icon="fa-paragraph",
                                                        template="blocks/paragraph_block.html",
                                                    ),
                                                ),
                                            ]
                                        )
                                    ),
                                )
                            ]
                        ),
                    ),
                    (
                        "dashboard_listing",
                        wagtail.blocks.StructBlock(
                            [
                                (
                                    "child_dashboards_title",
                                    wagtail.blocks.CharBlock(
                                        default="Dashboards",
                                        help_text="Optional: the title of the child dashboards accordion",
                                        required=False,
                                    ),
                                ),
                                (
                                    "related_datasets_title",
                                    wagtail.blocks.TextBlock(
                                        default="Datasets",
                                        help_text="Optional: the title of the related datasets accordion",
                                        required=False,
                                    ),
                                ),
                                ("show_dashboards", wagtail.blocks.BooleanBlock(default=True, required=False)),
                                ("show_datasets", wagtail.blocks.BooleanBlock(default=True, required=False)),
                            ]
                        ),
                    ),
                ],
                use_json_field=True,
            ),
        ),
    ]
