# Generated by Django 2.2.4 on 2019-11-10 17:03

from django.db import migrations
import wagtail.blocks
import wagtail.fields
import wagtailgeowidget.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('whatwedo', '0046_merge_20191110_1703'),
    ]

    operations = [
        migrations.AlterField(
            model_name='whatwedopage',
            name='locations_where_we_work',
            field=wagtail.fields.StreamField([('location', wagtail.blocks.StructBlock([('name', wagtail.blocks.TextBlock()), ('phone', wagtail.blocks.TextBlock(required=False)), ('google_map', wagtailgeowidget.blocks.GeoBlock())], label='Add Location'))], blank=True, null=True, verbose_name='Add Where We Work Locations'),
        ),
    ]
