# Generated by Django 2.2.4 on 2019-11-06 10:41

from django.db import migrations
import wagtail.blocks
import wagtail.fields
import wagtailgeowidget.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('whatwedo', '0042_auto_20191106_1013'),
    ]

    operations = [
        migrations.AlterField(
            model_name='whatwedopage',
            name='locations_where_we_work',
            field=wagtail.fields.StreamField([('benefit', wagtail.blocks.StructBlock([('location', wagtail.blocks.TextBlock()), ('address', wagtail.blocks.TextBlock()), ('map', wagtailgeowidget.blocks.GeoBlock())]))], blank=True, null=True, verbose_name='Add Where We Work Locations'),
        ),
    ]
