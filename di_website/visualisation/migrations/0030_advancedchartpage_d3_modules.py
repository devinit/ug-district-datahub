# Generated by Django 2.2.16 on 2020-09-24 12:53

from django.db import migrations
import wagtail.blocks
import wagtail.fields


class Migration(migrations.Migration):

    dependencies = [
        ('visualisation', '0029_advancedchartpage_use_d3'),
    ]

    operations = [
        migrations.AddField(
            model_name='advancedchartpage',
            name='d3_modules',
            field=wagtail.fields.StreamField([('module', wagtail.blocks.ListBlock(wagtail.blocks.CharBlock(choices=[('colour', 'Colour'), ('interpolate', 'Interpolate'), ('scale-chromatic', 'Scale Chromatic')], label='Module')))], blank=True),
        ),
    ]
