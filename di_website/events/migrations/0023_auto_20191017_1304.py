# Generated by Django 2.2.2 on 2019-10-17 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0022_eventpage_raw_content'),
    ]

    operations = [
        migrations.AlterField(
            model_name='eventpage',
            name='end_time',
            field=models.TimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='eventpage',
            name='location',
            field=models.CharField(blank=True, help_text='Physical location of event', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='eventpage',
            name='start_time',
            field=models.TimeField(blank=True, null=True),
        ),
    ]
