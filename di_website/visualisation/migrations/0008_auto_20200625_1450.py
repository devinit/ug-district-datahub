# Generated by Django 2.2.13 on 2020-06-25 14:50

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import wagtail.fields


class Migration(migrations.Migration):

    dependencies = [
        ('visualisation', '0007_auto_20200618_2042'),
    ]

    operations = [
        migrations.AddField(
            model_name='chartpage',
            name='aggregated',
            field=models.BooleanField(default=False, help_text='Optional: aggregated charts adds an "All data" option to selectable charts'),
        ),
        migrations.AddField(
            model_name='chartpage',
            name='caption',
            field=wagtail.fields.RichTextField(blank=True, help_text='Optional: caption text and link(s) for the chart', null=True),
        ),
        migrations.AddField(
            model_name='chartpage',
            name='selectable',
            field=models.BooleanField(default=False, help_text='Optional: selectable charts individusalise the data display a dropdown to select data'),
        ),
        migrations.AlterField(
            model_name='chartpage',
            name='chart_json',
            field=django.contrib.postgres.fields.jsonb.JSONField(help_text='Paste exported Chart Studio JSON here. To preserve data integretity, the JSON data should not be edited in Wagtail', verbose_name='Chart JSON'),
        ),
    ]
