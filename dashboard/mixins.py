from django.db import models
from django.utils.functional import cached_property
from django.utils.timezone import now
from django.http import Http404

from wagtail.models import Page
from wagtail.contrib.redirects.models import Redirect
from wagtail.search import index
from wagtail.fields import RichTextField
from wagtail.admin.panels import FieldPanel
from wagtail.contrib.routable_page.models import RoutablePageMixin, route

from common.constants import INSTRUCTIONS_RICHTEXT_FEATURES, MAX_RELATED_LINKS, POSITION_CHOICES, SIMPLE_RICHTEXT_FEATURES
from common.utils import WagtailImageField
from common.templatetags.string_utils import uid
from dashboard.fields import AceEditorField
from dashboard.utils import CaptionPanel, InstructionsPanel


class GeneralInstructionsMixin(models.Model):
    class Meta:
        abstract = True

    instructions = RichTextField(
        blank=True,
        features=INSTRUCTIONS_RICHTEXT_FEATURES + SIMPLE_RICHTEXT_FEATURES,
    )


class InstructionsMixin(GeneralInstructionsMixin):
    class Meta:
        abstract = True

    instructions_heading = models.TextField(
        blank=True, default='Interactive visualisation instructions',
        verbose_name='Accordion heading')
    instruction_position = models.CharField(max_length=256, choices=POSITION_CHOICES, default='bottom', verbose_name='Position')


class SpecificInstructionsMixin(InstructionsMixin):
    class Meta:
        abstract = True

    display_general_instructions = models.BooleanField(
        default=True,
        help_text='Optional: display the general visualisation instructions, edited on the visualisations parent page',
        verbose_name='Show general instructions'
    )


class FallbackImageMixin(models.Model):
    class Meta:
        abstract = True

    fallback_image = WagtailImageField(
        required=True,
        help_text='Fallback image for the chart',
    )
    display_fallback_mobile = models.BooleanField(
        default=True,
        help_text='Optional: when selected devices with screen widths up to 400px will be served the fallback image',
        verbose_name='Show on mobile'
    )
    display_fallback_tablet = models.BooleanField(
        default=False,
        help_text='Optional: when selected devices with screen widths up to 700px will be served the fallback image',
        verbose_name='Show on tablet'
    )
    alternative_text = models.TextField(blank=True, null=True, help_text="Accessibility text for screen readers e.t.c")


class CaptionMixin(models.Model):
    class Meta:
        abstract = True

    caption = RichTextField(
        null=True,
        blank=True,
        help_text='Optional: caption text and link(s) for the chart',
        features=INSTRUCTIONS_RICHTEXT_FEATURES + SIMPLE_RICHTEXT_FEATURES
    )


class CodePageMixin(InstructionsMixin, CaptionMixin, RoutablePageMixin, models.Model):
    class Meta:
        abstract = True

    subtitle = models.TextField(
        blank=True,
        null=True,
        help_text="Optional: subtitle to appear underneath the title."
    )

    html = AceEditorField(options={'mode':'html'}, blank=True, default='{% load wagtailcore_tags %}')
    javascript = AceEditorField(options={'mode':'javascript'}, blank=True, default='"use strict";')
    css = AceEditorField(options={'mode':'css'}, blank=True, default='/* CSS goes here */')

    content_panels = Page.content_panels + [
        FieldPanel('subtitle'),
        FieldPanel('html', classname='collapsible'),
        FieldPanel('javascript', classname='collapsible'),
        InstructionsPanel(),
        CaptionPanel(),
    ]

    @cached_property
    def parent(self):
        return self.get_parent().specific

    @cached_property
    def instructions_text(self):
        if self.instructions:
            return self.instructions

        return ''

    @cached_property
    def header_assets(self):
        if self.parent.header_assets:
            return self.parent.header_assets

        return ''

    @cached_property
    def footer_assets(self):
        if self.parent.footer_assets:
            return self.parent.footer_assets

        return ''

    def get_sitemap_urls(self, request):
        return []

    @route(r'^$')
    def chart(self, request):
        if request.user.is_authenticated:
            return super().serve(request)
        raise Http404()
