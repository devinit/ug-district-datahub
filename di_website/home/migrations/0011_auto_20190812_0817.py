# Generated by Django 2.2.3 on 2019-08-12 08:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0010_standardpage_other_pages_heading'),
    ]

    operations = [
        migrations.AlterField(
            model_name='standardpage',
            name='other_pages_heading',
            field=models.CharField(blank=True, default='Related content', max_length=255, verbose_name='Heading'),
        ),
    ]
