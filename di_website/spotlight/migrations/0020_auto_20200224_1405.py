# Generated by Django 2.2.6 on 2020-02-24 14:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('spotlight', '0019_spotlightindicator_data_format'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='spotlightindicator',
            name='theme',
        ),
        migrations.DeleteModel(
            name='SpotlightTheme',
        ),
    ]
