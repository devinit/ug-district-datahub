# Generated by Django 2.2.4 on 2019-12-03 12:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vacancies', '0046_auto_20191126_1402'),
    ]

    operations = [
        migrations.AddField(
            model_name='vacancypage',
            name='second_interview_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
