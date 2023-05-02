from django import template

from datasets.models import DatasetPage

register = template.Library()


@register.simple_tag(takes_context=False)
def latest_datasets(count=6):
    return DatasetPage.objects.live().order_by("-release_date")[0:count]
