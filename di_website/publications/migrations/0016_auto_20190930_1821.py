# Generated by Django 2.2.2 on 2019-09-30 18:21

from django.db import migrations
import wagtail.blocks
import wagtail.fields


class Migration(migrations.Migration):

    dependencies = [
        ('publications', '0015_publicationsummarypage_footnotes_list'),
    ]

    operations = [
        migrations.AlterField(
            model_name='legacypublicationpage',
            name='footnotes_list',
            field=wagtail.fields.StreamField([('footnote', wagtail.blocks.StructBlock([('footnote_id', wagtail.blocks.IntegerBlock()), ('title', wagtail.blocks.CharBlock()), ('text', wagtail.blocks.RichTextBlock())]))], blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='publicationappendixpage',
            name='footnotes_list',
            field=wagtail.fields.StreamField([('footnote', wagtail.blocks.StructBlock([('footnote_id', wagtail.blocks.IntegerBlock()), ('title', wagtail.blocks.CharBlock()), ('text', wagtail.blocks.RichTextBlock())]))], blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='publicationchapterpage',
            name='footnotes_list',
            field=wagtail.fields.StreamField([('footnote', wagtail.blocks.StructBlock([('footnote_id', wagtail.blocks.IntegerBlock()), ('title', wagtail.blocks.CharBlock()), ('text', wagtail.blocks.RichTextBlock())]))], blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='publicationsummarypage',
            name='footnotes_list',
            field=wagtail.fields.StreamField([('footnote', wagtail.blocks.StructBlock([('footnote_id', wagtail.blocks.IntegerBlock()), ('title', wagtail.blocks.CharBlock()), ('text', wagtail.blocks.RichTextBlock())]))], blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='shortpublicationpage',
            name='footnotes_list',
            field=wagtail.fields.StreamField([('footnote', wagtail.blocks.StructBlock([('footnote_id', wagtail.blocks.IntegerBlock()), ('title', wagtail.blocks.CharBlock()), ('text', wagtail.blocks.RichTextBlock())]))], blank=True, null=True),
        ),
    ]
