from django.db import models
from django.utils.text import slugify

from modelcluster.models import ClusterableModel

from wagtail.snippets.models import register_snippet
from wagtail.admin.panels import FieldPanel


@register_snippet
class Region(ClusterableModel):
    name = models.CharField(max_length=255, unique=True)

    panels = [
        FieldPanel('name'),
    ]

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


@register_snippet
class District(ClusterableModel):
    name = models.CharField(max_length=255, unique=True)
    region = models.ForeignKey(Region, related_name="+", on_delete=models.CASCADE)
    slug = models.SlugField(
        max_length=255, blank=True, null=True,
        help_text="Optional. Will be auto-generated from name if left blank.")

    panels = [
        FieldPanel('name'),
        FieldPanel('region'),
        FieldPanel('slug'),
    ]

    class Meta:
        ordering = ["name"]
        verbose_name_plural = 'Districts'

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super(District, self).save(*args, **kwargs)
