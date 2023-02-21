# Generated by Django 3.2.13 on 2022-07-20 09:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('publications', '0102_publicationpage_related_options'),
    ]

    operations = [
        migrations.AddField(
            model_name='audiovisualmedia',
            name='related_options',
            field=models.CharField(choices=[('MANUAL', 'Manual'), ('COUNTRY', 'Country'), ('TOPIC', 'Topic')], default='Manual', max_length=253),
        ),
        migrations.AddField(
            model_name='legacypublicationpage',
            name='related_options',
            field=models.CharField(choices=[('MANUAL', 'Manual'), ('COUNTRY', 'Country'), ('TOPIC', 'Topic')], default='Manual', max_length=253),
        ),
        migrations.AddField(
            model_name='publicationappendixpage',
            name='related_options',
            field=models.CharField(choices=[('MANUAL', 'Manual'), ('COUNTRY', 'Country'), ('TOPIC', 'Topic')], default='Manual', max_length=253),
        ),
        migrations.AddField(
            model_name='publicationchapterpage',
            name='related_options',
            field=models.CharField(choices=[('MANUAL', 'Manual'), ('COUNTRY', 'Country'), ('TOPIC', 'Topic')], default='Manual', max_length=253),
        ),
        migrations.AddField(
            model_name='publicationforewordpage',
            name='related_options',
            field=models.CharField(choices=[('MANUAL', 'Manual'), ('COUNTRY', 'Country'), ('TOPIC', 'Topic')], default='Manual', max_length=253),
        ),
        migrations.AddField(
            model_name='publicationsummarypage',
            name='related_options',
            field=models.CharField(choices=[('MANUAL', 'Manual'), ('COUNTRY', 'Country'), ('TOPIC', 'Topic')], default='Manual', max_length=253),
        ),
        migrations.AddField(
            model_name='shortpublicationpage',
            name='related_options',
            field=models.CharField(choices=[('MANUAL', 'Manual'), ('COUNTRY', 'Country'), ('TOPIC', 'Topic')], default='Manual', max_length=253),
        ),
    ]
