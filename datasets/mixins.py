from datetime import datetime

from django.db import models

from wagtail.blocks import RichTextBlock
from wagtail.fields import StreamField

from common.constants import RICHTEXT_FEATURES


class DataSetMixin(models.Model):
    class Meta():
        abstract = True

    parent_page_types = ['datasets.DataSetListing']
    subpage_types = []

    release_date = models.DateField(default=datetime.now)
    meta_data = StreamField(
        [
            ('description', RichTextBlock(required=True, features=RICHTEXT_FEATURES)),
            ('internal_notes', RichTextBlock(required=False, features=RICHTEXT_FEATURES)),
            ('licence', RichTextBlock(required=False, features=RICHTEXT_FEATURES)),
            ('citation', RichTextBlock(required=False, template="blocks/urlize_richtext.html", features=RICHTEXT_FEATURES)),
        ],
        verbose_name='Content',
        help_text='A description is expected, but only one of each shall be shown',
        use_json_field=True
    )
