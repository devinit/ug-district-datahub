# Generated by Django 2.2.3 on 2019-07-29 13:27

from django.db import migrations
import wagtail.blocks
import wagtail.fields
import wagtail.embeds.blocks
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0003_auto_20190724_0833'),
    ]

    operations = [
        migrations.AddField(
            model_name='eventindexpage',
            name='body',
            field=wagtail.fields.StreamField([('paragraph_block', wagtail.blocks.RichTextBlock(icon='fa-paragraph', template='blocks/paragraph_block.html')), ('block_quote', wagtail.blocks.StructBlock([('text', wagtail.blocks.TextBlock())])), ('banner_block', wagtail.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('video', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', icon='fa-s15', required=False, template='blocks/embed_block.html')), ('text', wagtail.blocks.TextBlock()), ('meta', wagtail.blocks.CharBlock(help_text='Anything from a name, location e.t.c - usually to provide credit for the text', required=False)), ('button_caption', wagtail.blocks.CharBlock(required=False)), ('button_link', wagtail.blocks.URLBlock(required=False)), ('button_page', wagtail.blocks.PageChooserBlock(required=False)), ('is_section', wagtail.blocks.BooleanBlock(default=False, required=False))]))], blank=True, verbose_name='Page Body'),
        ),
    ]
