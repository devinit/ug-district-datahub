# Generated by Django 2.2.2 on 2019-07-15 13:15

from django.db import migrations
import wagtail.fields


class Migration(migrations.Migration):

    dependencies = [
        ('ourteam', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='teammemberpage',
            name='my_story',
            field=wagtail.fields.RichTextField(blank=True, help_text='Please say something about team member ', null=True),
        ),
    ]
