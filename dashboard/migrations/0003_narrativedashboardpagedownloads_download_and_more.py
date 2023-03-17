# Generated by Django 4.1.7 on 2023-03-17 13:37

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.contrib.taggit
import modelcluster.fields


class Migration(migrations.Migration):

    dependencies = [
        ("wagtailimages", "0024_index_image_file_hash"),
        ("wagtaildocs", "0012_uploadeddocument"),
        ("dashboard", "0002_district_narrativedashboardcalltoaction_and_more"),
        ("taggit", "0005_auto_20220424_2025"),
        ("downloads", "0001_initial"),
        ("wagtailcore", "0078_referenceindex"),
    ]

    operations = [
        migrations.AddField(
            model_name="narrativedashboardpagedownloads",
            name="download",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="+",
                to="downloads.dashboarddownload",
            ),
        ),
        migrations.AddField(
            model_name="narrativedashboardpagedownloads",
            name="item",
            field=modelcluster.fields.ParentalKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="dashboard_downloads",
                to="dashboard.narrativedashboardpage",
            ),
        ),
        migrations.AddField(
            model_name="narrativedashboardpagedataset",
            name="dataset",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="+",
                to="wagtailcore.page",
            ),
        ),
        migrations.AddField(
            model_name="narrativedashboardpagedataset",
            name="item",
            field=modelcluster.fields.ParentalKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="dashboard_datasets",
                to="dashboard.narrativedashboardpage",
            ),
        ),
        migrations.AddField(
            model_name="narrativedashboardpagedatadownloads",
            name="download",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="+",
                to="downloads.datadownload",
            ),
        ),
        migrations.AddField(
            model_name="narrativedashboardpagedatadownloads",
            name="item",
            field=modelcluster.fields.ParentalKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="data_downloads",
                to="dashboard.narrativedashboardpage",
            ),
        ),
        migrations.AddField(
            model_name="narrativedashboardpage",
            name="download_report_cover",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="+",
                to="wagtailimages.image",
                verbose_name="Report cover",
            ),
        ),
        migrations.AddField(
            model_name="narrativedashboardpage",
            name="hero_image",
            field=models.ForeignKey(
                blank=True,
                help_text="Hero Image",
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="+",
                to="wagtailimages.image",
            ),
        ),
        migrations.AddField(
            model_name="narrativedashboardpage",
            name="hero_link",
            field=models.ForeignKey(
                blank=True,
                help_text="Choose a page to link to for the Call to Action",
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="+",
                to="wagtailcore.page",
                verbose_name="Hero link",
            ),
        ),
        migrations.AddField(
            model_name="narrativedashboardpage",
            name="report_download",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="+",
                to="wagtaildocs.document",
            ),
        ),
        migrations.AddField(
            model_name="narrativedashboardpage",
            name="search_image",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                related_name="+",
                to="wagtailimages.image",
                verbose_name="Search image",
            ),
        ),
        migrations.AddField(
            model_name="narrativedashboardpage",
            name="topics",
            field=modelcluster.contrib.taggit.ClusterTaggableManager(
                blank=True,
                help_text="A comma-separated list of tags.",
                through="dashboard.NarrativeDashboardTopic",
                to="taggit.Tag",
                verbose_name="Topics",
            ),
        ),
        migrations.AddField(
            model_name="narrativedashboardcalltoaction",
            name="item",
            field=modelcluster.fields.ParentalKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="dashboard_cta",
                to="dashboard.narrativedashboardpage",
            ),
        ),
        migrations.AddField(
            model_name="district",
            name="region",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="+",
                to="dashboard.region",
            ),
        ),
    ]