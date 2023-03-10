# Generated by Django 3.2.7 on 2022-01-19 05:40

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('publications', '0092_auto_20211011_0642'),
    ]

    operations = [
        migrations.AddField(
            model_name='publicationappendixpage',
            name='published_date',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, help_text='This date will be used for display and ordering'),
        ),
        migrations.AddField(
            model_name='publicationchapterpage',
            name='published_date',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, help_text='This date will be used for display and ordering'),
        ),
        migrations.AddField(
            model_name='publicationforewordpage',
            name='published_date',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, help_text='This date will be used for display and ordering'),
        ),
        migrations.AddField(
            model_name='publicationsummarypage',
            name='published_date',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, help_text='This date will be used for display and ordering'),
        ),
    ]
