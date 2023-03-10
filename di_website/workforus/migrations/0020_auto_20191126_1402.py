# Generated by Django 2.2.2 on 2019-11-26 14:02

from django.db import migrations
import wagtail.blocks
import wagtail.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('workforus', '0019_auto_20191125_1406'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workforuspage',
            name='benefits',
            field=wagtail.fields.StreamField([('benefit', wagtail.blocks.StructBlock([('title', wagtail.blocks.TextBlock()), ('body', wagtail.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed', 'anchor'], required=False)), ('image', wagtail.images.blocks.ImageChooserBlock(required=False))])), ('logo', wagtail.images.blocks.ImageChooserBlock(required=False))], blank=True, null=True, verbose_name='Benefits'),
        ),
    ]
