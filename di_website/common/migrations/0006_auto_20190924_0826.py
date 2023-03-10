# Generated by Django 2.2.3 on 2019-09-24 08:26

from django.db import migrations, models
import wagtail.fields


class Migration(migrations.Migration):

    dependencies = [
        ('common', '0005_pagenotification'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pagenotification',
            name='message',
            field=wagtail.fields.RichTextField(help_text='Body of the email. Supports tokens for page title (%page_title%) and page URL (%page_url%)', verbose_name='Notification message'),
        ),
        migrations.AlterField(
            model_name='pagenotification',
            name='title',
            field=models.CharField(default='DI Website Scheduled Notification', help_text='This will be the subject of the notification email', max_length=255, verbose_name='Notification title'),
        ),
    ]
