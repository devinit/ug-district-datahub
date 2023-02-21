# Generated by Django 2.2.4 on 2019-11-19 11:31

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0023_auto_20191105_1129'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogindexpage',
            name='published_date',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, help_text='This date will be used for display and ordering'),
        ),
    ]
