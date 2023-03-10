from django.db import models
from datetime import datetime

from wagtail.admin.panels import FieldPanel
from wagtail.fields import StreamField
from wagtail.blocks import CharBlock, PageChooserBlock, RichTextBlock, StructBlock, URLBlock
from wagtail.images.blocks import ImageChooserBlock

from di_website.common.constants import RICHTEXT_FEATURES_NO_FOOTNOTES


class DataSetMixin(models.Model):
    class Meta():
        abstract = True

    parent_page_types = ['datasection.DataSetListing']
    subpage_types = []

    release_date = models.DateField(default=datetime.now)
    authors = StreamField([
        ('internal_author', PageChooserBlock(
            required=False,
            target_model='ourteam.TeamMemberPage',
            icon='fa-user'
        )),
        ('external_author', StructBlock([
            ('name', CharBlock(required=False)),
            ('title', CharBlock(required=False)),
            ('photograph', ImageChooserBlock(required=False)),
            ('page', URLBlock(required=False))
        ], icon='fa-user'))
    ], blank=True, use_json_field=True)
    meta_data = StreamField(
        [
            ('description', RichTextBlock(required=True, features=RICHTEXT_FEATURES_NO_FOOTNOTES)),
            ('provenance', RichTextBlock(required=False, features=RICHTEXT_FEATURES_NO_FOOTNOTES)),
            ('variables', RichTextBlock(required=False, features=RICHTEXT_FEATURES_NO_FOOTNOTES)),
            ('geography', RichTextBlock(required=False, features=RICHTEXT_FEATURES_NO_FOOTNOTES)),
            ('geograpic_coding', RichTextBlock(required=False, features=RICHTEXT_FEATURES_NO_FOOTNOTES)),
            ('unit', RichTextBlock(required=False, features=RICHTEXT_FEATURES_NO_FOOTNOTES)),
            ('internal_notes', RichTextBlock(required=False, features=RICHTEXT_FEATURES_NO_FOOTNOTES)),
            ('licence', RichTextBlock(required=False, features=RICHTEXT_FEATURES_NO_FOOTNOTES)),
            ('citation', RichTextBlock(required=False, template="blocks/urlize_richtext.html", features=RICHTEXT_FEATURES_NO_FOOTNOTES)),
        ],
        verbose_name='Content',
        help_text='A description is expected, but only one of each shall be shown',
        use_json_field=True
    )
    other_pages_heading = models.CharField(
        blank=True, max_length=255, verbose_name='Heading', default='More about')


class DataSetSourceMixin(models.Model):
    class Meta():
        abstract = True

    source = models.ForeignKey(
        'datasection.DataSource', null=True, blank=True, on_delete=models.SET_NULL,
        related_name='+', verbose_name='Data Source')

    panels = [FieldPanel('source')]
