# Generated by Django 2.2.2 on 2019-08-15 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0008_auto_20190815_1850'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newsstorypage',
            name='press_release',
            field=models.BooleanField(default=False, help_text='Should this page appear in the Media Center?'),
        ),
    ]
