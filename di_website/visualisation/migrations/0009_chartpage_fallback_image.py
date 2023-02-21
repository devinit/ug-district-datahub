# Generated by Django 2.2.13 on 2020-06-26 14:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailimages', '0022_uploadedimage'),
        ('visualisation', '0008_auto_20200625_1450'),
    ]

    operations = [
        migrations.AddField(
            model_name='chartpage',
            name='fallback_image',
            field=models.ForeignKey(help_text='Fallback image for the chart', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
    ]
