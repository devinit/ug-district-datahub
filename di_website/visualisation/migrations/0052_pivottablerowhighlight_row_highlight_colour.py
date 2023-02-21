# Generated by Django 3.2.7 on 2022-01-31 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visualisation', '0051_auto_20220128_1333'),
    ]

    operations = [
        migrations.AddField(
            model_name='pivottablerowhighlight',
            name='row_highlight_colour',
            field=models.CharField(blank=True, choices=[('poppy', 'Red'), ('bluebell', 'Blue'), ('rose', 'Pink'), ('sunflower', 'Yellow'), ('marigold', 'Orange'), ('lavendar', 'Purple'), ('leaf', 'Green')], default='rose', max_length=256),
        ),
    ]
