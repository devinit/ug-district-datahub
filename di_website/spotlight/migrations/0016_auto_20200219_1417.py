# Generated by Django 2.2.6 on 2020-02-19 14:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('spotlight', '0015_auto_20200219_1411'),
    ]

    operations = [
        migrations.AlterField(
            model_name='spotlighttheme',
            name='section',
            field=models.CharField(blank=True, help_text='Determines which section on the spotlights a particular theme and its indicators appears e.g map,facts', max_length=200, null=True),
        ),
    ]
