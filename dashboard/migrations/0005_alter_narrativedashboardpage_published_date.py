# Generated by Django 4.1.7 on 2023-03-22 13:20

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        (
            "dashboard",
            "0004_remove_narrativedashboardpage_download_report_body_and_more",
        ),
    ]

    operations = [
        migrations.AlterField(
            model_name="narrativedashboardpage",
            name="published_date",
            field=models.DateTimeField(
                blank=True,
                default=django.utils.timezone.now,
                help_text="This date will be used for display and ordering",
                null=True,
            ),
        ),
    ]