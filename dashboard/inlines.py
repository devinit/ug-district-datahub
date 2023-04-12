from django.db import models

from modelcluster.fields import ParentalKey

from wagtail.models import Orderable
from wagtail.admin.panels import FieldPanel, PageChooserPanel

from downloads.models import DownloadItem, DataDownloadItem


class NarrativeDashboardPageDownloads(Orderable, DownloadItem):
    item = ParentalKey("NarrativeDashboardPage", related_name="dashboard_downloads")


class NarrativeDashboardPageDataDownloads(Orderable, DataDownloadItem):
    item = ParentalKey("NarrativeDashboardPage", related_name="data_downloads")


class DashboardDataset(Orderable):
    class Meta(Orderable.Meta):
        abstract = True

    dataset = models.ForeignKey(
        "wagtailcore.Page",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
        related_name="+",
    )

    panels = [PageChooserPanel("dataset")]  # TODO: limit to dataset page


class NarrativeDashboardPageDataset(DashboardDataset):
    item = ParentalKey("NarrativeDashboardPage", related_name="dashboard_datasets")


class DashboardCallToAction(Orderable):
    class Meta(Orderable.Meta):
        abstract = True

    CTA_POSITION_CHOICES = [
        ("top", "Top"),
        ("bottom", "Bottom"),
        ("top-bottom", "Top & Bottom"),
    ]

    title = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        help_text="Optional: when left blank, the call to action will not be show",
        verbose_name="Title",
    )
    body = models.TextField(
        null=True,
        blank=True,
        verbose_name="Description",
        help_text="Optional: describe the purpose of your call to action in a bit more detail",
    )
    button_text = models.CharField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name="Button Caption",
        help_text="Optional: this is required to show the button",
    )
    button_url = models.URLField(
        max_length=255,
        null=True,
        blank=True,
        verbose_name="Button URL",
        help_text="Optional: this is required to show the button",
    )
    position = models.CharField(
        max_length=100,
        null=True,
        blank=True,
        choices=CTA_POSITION_CHOICES,
        verbose_name="Position",
        default="top",
    )
    inherit = models.BooleanField(
        default=True, help_text="Optional: show this CTA on child pages"
    )

    panels = [
        FieldPanel("title"),
        FieldPanel("body"),
        FieldPanel("button_text"),
        FieldPanel("button_url"),
        FieldPanel("inherit"),
        FieldPanel("position"),
    ]


class NarrativeDashboardCallToAction(DashboardCallToAction):
    item = ParentalKey("NarrativeDashboardPage", related_name="dashboard_cta")
