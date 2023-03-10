# Generated by Django 2.2.2 on 2019-11-12 16:37

from django.db import migrations
import wagtail.blocks
import wagtail.fields
import wagtail.documents.blocks
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('about', '0028_auto_20191107_1356'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ourstorypage',
            name='timeline_items',
            field=wagtail.fields.StreamField([('timeline', wagtail.blocks.StructBlock([('section_heading', wagtail.blocks.CharBlock(required=False)), ('section_subheading', wagtail.blocks.CharBlock(required=False)), ('items', wagtail.blocks.StreamBlock([('item', wagtail.blocks.StructBlock([('month', wagtail.blocks.CharBlock(help_text='Month abbreviation E.g. Apr', required=False)), ('year', wagtail.blocks.CharBlock(help_text='Year E.g. 2008', required=False)), ('title', wagtail.blocks.CharBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('text', wagtail.blocks.RichTextBlock(required=False)), ('documents', wagtail.blocks.StructBlock([('box_heading', wagtail.blocks.CharBlock(icon='title', required=False)), ('documents', wagtail.blocks.StreamBlock([('document', wagtail.documents.blocks.DocumentChooserBlock())], required=False)), ('dark_mode', wagtail.blocks.BooleanBlock(default=False, help_text='Red on white if unchecked. White on dark grey if checked.', required=False))], required=False))]))]))]))]),
        ),
    ]
