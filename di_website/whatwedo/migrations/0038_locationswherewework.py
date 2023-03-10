# Generated by Django 2.2.4 on 2019-11-06 08:52

from django.db import migrations, models
import django.db.models.deletion
import modelcluster.fields
import wagtail.fields
import wagtailgeowidget.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('wagtailcore', '0041_group_collection_permissions_verbose_name_plural'),
        ('whatwedo', '0037_delete_whereweworklocations'),
    ]

    operations = [
        migrations.CreateModel(
            name='LocationsWhereWeWork',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sort_order', models.IntegerField(blank=True, editable=False, null=True)),
                ('location', models.CharField(blank=True, max_length=255, null=True, verbose_name='Location')),
                ('address', models.CharField(blank=True, max_length=255, null=True, verbose_name='Address')),
                ('latitude', models.CharField(blank=True, max_length=255, null=True, verbose_name='Latitude')),
                ('longitude', models.CharField(blank=True, max_length=255, null=True, verbose_name='Longitude')),
                ('body', wagtail.fields.StreamField([('map', wagtailgeowidget.blocks.GeoBlock())])),
                ('page', modelcluster.fields.ParentalKey(on_delete=django.db.models.deletion.CASCADE, related_name='locations_where_work', to='wagtailcore.Page')),
            ],
            options={
                'ordering': ['sort_order'],
                'abstract': False,
            },
        ),
    ]
