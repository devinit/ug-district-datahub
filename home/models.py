from django.db import models

from modelcluster.fields import ParentalKey
from modelcluster.models import ClusterableModel

from wagtail.admin.panels import (
    FieldPanel,
    InlinePanel,
    PageChooserPanel,
    MultiFieldPanel
)
from wagtail.models import Orderable, Page
from wagtail.fields import RichTextField, StreamField
from wagtail.images.models import SourceImageIOError
from wagtail.snippets.models import register_snippet
from wagtail.blocks import CharBlock, PageChooserBlock, RichTextBlock, StructBlock

from wagtailmetadata.models import MetadataPageMixin

from common.utils import hero_panels, get_related_pages
from common.mixins import HeroMixin, OtherPageMixin, SectionBodyMixin, TypesetBodyMixin
from common.constants import SIMPLE_RICHTEXT_FEATURES, RICHTEXT_FEATURES_NO_FOOTNOTES


class AbstractLink(models.Model):
    """
    Contains common properties for links

    Arguments:
        Model {Django Model}
    """
    class Meta:
        abstract = True

    label = models.CharField(
        max_length=255,
        blank=True
    )
    page = models.ForeignKey(
        'wagtailcore.Page',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        related_name='+'
    )
    link_url = models.URLField(blank=True)

    panels = [
        FieldPanel('label'),
        PageChooserPanel('page'),
        FieldPanel('link_url')
    ]


@register_snippet
class NewsLetter(models.Model):
    caption = models.CharField(
        max_length=255,
        default='Sign up for our newsletter to receive regular news and updates',
    )
    link_label = models.CharField(
        max_length=255,
        default='Subscribe here'
    )
    link_url = models.URLField(blank=True)

    panels = [
        FieldPanel('caption'),
        FieldPanel('link_label'),
        FieldPanel('link_url')
    ]

    def __str__(self):
        return self.caption

    class Meta:
        verbose_name = 'newsletter'
        verbose_name_plural = 'newsletters'


@register_snippet
class FooterSection(Orderable, ClusterableModel):
    title = models.CharField(max_length=255)
    show_navigation_links = models.BooleanField(default=False)

    panels = [
        FieldPanel('title'),
        FieldPanel('show_navigation_links'),
        InlinePanel('footer_section_links', label='Section Links'),
        InlinePanel('footer_social_links', label='Social Links')
    ]

    def __str__(self):
        return self.title

    class Meta(Orderable.Meta):
        verbose_name = "Footer Section"
        verbose_name_plural = "Footer Sections"


class FooterLink(Orderable, AbstractLink):
    section = ParentalKey(
        'FooterSection', on_delete=models.CASCADE, related_name="footer_section_links")

    def __str__(self):
        return self.page.title if self.page else self.label

    class Meta(Orderable.Meta):
        verbose_name = "Footer Link"
        verbose_name_plural = "Footer Links"


class SocialLink(Orderable, models.Model):
    SOCIAL_CHOICES = [
        ('twitter', 'Twitter'),
        ('facebook', 'Facebook'),
        ('linkedin', 'Linked In'),
        ('facebook', 'Facebook'),
        ('youtube', 'YouTube'),
        ('flickr', 'Flickr'),
    ]

    social_platform = models.CharField(
        max_length=100,
        choices=SOCIAL_CHOICES
    )
    link_url = models.CharField(max_length=255, default='')
    section = ParentalKey(
        'FooterSection', on_delete=models.CASCADE, related_name="footer_social_links")

    panels = [
        FieldPanel('social_platform'),
        FieldPanel('link_url')
    ]

    def __str__(self):
        return self.social_platform

    class Meta(Orderable.Meta):
        verbose_name = 'Social Link'
        verbose_name_plural = 'Social Links'


@register_snippet
class FooterText(models.Model):
    major_content = RichTextField(features=SIMPLE_RICHTEXT_FEATURES, blank=True)
    body = RichTextField(features=SIMPLE_RICHTEXT_FEATURES)

    panels = [
        FieldPanel('major_content'),
        FieldPanel('body'),
    ]

    def __str__(self):
        return "Footer Text"

    class Meta:
        verbose_name_plural = 'Footer Text'

class HomePage(Page):
    pass
