# Generated by Django 2.2.4 on 2019-11-19 11:38

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0024_blogindexpage_published_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blogindexpage',
            name='published_date',
        ),
        migrations.AddField(
            model_name='blogarticlepage',
            name='published_date',
            field=models.DateTimeField(blank=True, default=django.utils.timezone.now, help_text='This date will be used for display and ordering'),
        ),
    ]
