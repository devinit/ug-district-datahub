from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import EmailValidator

from wagtail.admin.panels import FieldPanel, MultiFieldPanel, PageChooserPanel



def hero_panels(allowed_pages=[]):
    """
    Called when creating page content_panels for pages that require a Hero
    Returns:
        MultiFieldPanel -- Hero content for a page
    """
    return MultiFieldPanel([
        FieldPanel('hero_image'),
        FieldPanel('hero_image_credit_name'),
        FieldPanel('hero_image_credit_url'),
        FieldPanel('hero_text', classname="hero_excerpt"),
        FieldPanel('hero_link_caption'),
        PageChooserPanel('hero_link', allowed_pages)
    ], heading="Hero Section")


def call_to_action_panel():
    return MultiFieldPanel([
        FieldPanel('call_to_action_title'),
        FieldPanel('call_to_action_body'),
        FieldPanel('call_to_action_button_text'),
        FieldPanel('call_to_action_button_url'),
    ], heading='Call to Action Section', classname='collapsible collapsed')


def get_paginator_range(paginator, page):
    """Return a 4 elements long list (two before and two after current page) containing a range of page numbers (int)."""
    range_start = max(page.number - 2, 1)
    range_end = min(page.number + 2, paginator.num_pages)
    return [i for i in range(range_start, range_end + 1)]


def multiple_email_validator(email_string):
    email_list = email_string.split(',')
    validator = EmailValidator()
    for email in email_list:
        try:
            validator(email)
        except ValidationError:
            raise ValidationError('"%s" is invalid' % email)


def ForeignKeyField(model=None, required=False, on_delete=models.SET_NULL, related_name='+', **kwargs) -> models.ForeignKey:
    if not model:
        raise ValueError('ForeignKeyField requires a valid model string reference')
    required = not required
    return models.ForeignKey(
        model,
        null=True,
        blank=required,
        on_delete=on_delete,
        related_name=related_name,
        **kwargs
    )


def WagtailImageField(required=False, **kwargs) -> models.ForeignKey:
    return ForeignKeyField(
        model='wagtailimages.Image',
        required=required,
        **kwargs
    )
