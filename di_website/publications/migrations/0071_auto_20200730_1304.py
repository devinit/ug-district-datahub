# Generated by Django 2.2.13 on 2020-07-30 13:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('publications', '0070_auto_20200730_1259'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publicationappendixpage',
            name='download_report_cover',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image', verbose_name='Report cover'),
        ),
    ]
