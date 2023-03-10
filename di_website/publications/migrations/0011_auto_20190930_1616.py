# Generated by Django 2.2.2 on 2019-09-30 16:16

from django.db import migrations, models
import django.db.models.deletion
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailimages', '0001_squashed_0021'),
        ('wagtaildocs', '0010_document_file_hash'),
        ('publications', '0010_merge_20190926_1304'),
    ]

    operations = [
        migrations.AddField(
            model_name='legacypublicationpage',
            name='download_report_body',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='legacypublicationpage',
            name='download_report_button_text',
            field=models.CharField(blank=True, default='Download now', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='legacypublicationpage',
            name='download_report_cover',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
        migrations.AddField(
            model_name='legacypublicationpage',
            name='download_report_title',
            field=models.CharField(blank=True, default='Download this report', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='legacypublicationpage',
            name='raw_content',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='legacypublicationpage',
            name='report_download',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtaildocs.Document'),
        ),
        migrations.AddField(
            model_name='shortpublicationpage',
            name='download_report_body',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='shortpublicationpage',
            name='download_report_button_text',
            field=models.CharField(blank=True, default='Download now', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='shortpublicationpage',
            name='download_report_cover',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image'),
        ),
        migrations.AddField(
            model_name='shortpublicationpage',
            name='download_report_title',
            field=models.CharField(blank=True, default='Download this report', max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='shortpublicationpage',
            name='report_download',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtaildocs.Document'),
        ),
        migrations.AlterField(
            model_name='legacypublicationpage',
            name='colour',
            field=models.CharField(choices=[('poppy', 'Red'), ('bluebell', 'Blue'), ('rose', 'Pink'), ('sunflower', 'Yellow'), ('marigold', 'Orange'), ('lavendar', 'Purple'), ('leaf', 'Green')], default='poppy', max_length=256),
        ),
        migrations.AlterField(
            model_name='legacypublicationpage',
            name='content',
            field=wagtail.core.fields.RichTextField(blank=True, help_text='Short summary for the legacy report', null=True, verbose_name='Summary'),
        ),
        migrations.AlterField(
            model_name='publicationappendixpage',
            name='colour',
            field=models.CharField(choices=[('poppy', 'Red'), ('bluebell', 'Blue'), ('rose', 'Pink'), ('sunflower', 'Yellow'), ('marigold', 'Orange'), ('lavendar', 'Purple'), ('leaf', 'Green')], default='poppy', max_length=256),
        ),
        migrations.AlterField(
            model_name='publicationchapterpage',
            name='colour',
            field=models.CharField(choices=[('poppy', 'Red'), ('bluebell', 'Blue'), ('rose', 'Pink'), ('sunflower', 'Yellow'), ('marigold', 'Orange'), ('lavendar', 'Purple'), ('leaf', 'Green')], default='poppy', max_length=256),
        ),
        migrations.AlterField(
            model_name='publicationpage',
            name='colour',
            field=models.CharField(choices=[('poppy', 'Red'), ('bluebell', 'Blue'), ('rose', 'Pink'), ('sunflower', 'Yellow'), ('marigold', 'Orange'), ('lavendar', 'Purple'), ('leaf', 'Green')], default='poppy', max_length=256),
        ),
        migrations.AlterField(
            model_name='publicationsummarypage',
            name='colour',
            field=models.CharField(choices=[('poppy', 'Red'), ('bluebell', 'Blue'), ('rose', 'Pink'), ('sunflower', 'Yellow'), ('marigold', 'Orange'), ('lavendar', 'Purple'), ('leaf', 'Green')], default='poppy', max_length=256),
        ),
        migrations.AlterField(
            model_name='shortpublicationpage',
            name='colour',
            field=models.CharField(choices=[('poppy', 'Red'), ('bluebell', 'Blue'), ('rose', 'Pink'), ('sunflower', 'Yellow'), ('marigold', 'Orange'), ('lavendar', 'Purple'), ('leaf', 'Green')], default='poppy', max_length=256),
        ),
        migrations.DeleteModel(
            name='LegacyPublicationPageDownloadGroups',
        ),
    ]
