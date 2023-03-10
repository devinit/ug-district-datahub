# Generated by Django 2.2.3 on 2019-09-23 13:12

import di_website.common.base
from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields
import wagtail.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wagtailcore', '0041_group_collection_permissions_verbose_name_plural'),
        ('common', '0004_delete_download'),
    ]

    operations = [
        migrations.CreateModel(
            name='PageNotification',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_time', models.DateTimeField(verbose_name='Notification date')),
                ('title', models.CharField(default='DI Website Scheduled Notification', max_length=255, verbose_name='Notification title')),
                ('message', wagtail.fields.RichTextField(verbose_name='Notification message')),
                ('emails', models.TextField(help_text='Email addresses to notify. Multiple emails must be comma separated', validators=[di_website.common.base.multiple_email_validator])),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='page_notifications', to='wagtailcore.Page')),
            ],
        ),
    ]
