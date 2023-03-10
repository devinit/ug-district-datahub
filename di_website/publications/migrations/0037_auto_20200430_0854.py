# Generated by Django 2.2.4 on 2020-04-30 08:54

from django.db import migrations
import wagtail.fields
import wagtail.embeds.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('publications', '0036_audiovisualmedia_full_width_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='audiovisualmedia',
            name='full_width_video',
            field=wagtail.fields.StreamField([('full_width_video', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', icon='fa-video-camera', required=False, template='blocks/full_width_embed.html'))], blank=True),
        ),
    ]
