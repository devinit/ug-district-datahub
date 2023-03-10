# Generated by Django 2.2.2 on 2019-07-17 11:05

from django.db import migrations, models
import django.db.models.deletion
import wagtail.blocks
import wagtail.fields
import wagtail.embeds.blocks
import wagtail.images.blocks


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wagtailimages', '0001_squashed_0021'),
        ('wagtailcore', '0041_group_collection_permissions_verbose_name_plural'),
        ('users', '0004_subscription'),
    ]

    operations = [
        migrations.CreateModel(
            name='OfficeLocation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(help_text='e.g. Bristol, UK | Kampala, UG | Nairobi, KE', max_length=100)),
            ],
            options={
                'verbose_name': 'Office Location',
                'verbose_name_plural': 'Office Locations',
                'db_table': 'office_location',
            },
        ),
        migrations.CreateModel(
            name='VacancyPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
                ('hero_title', models.CharField(blank=True, help_text='Leave blank if you want it to match the page title', max_length=255)),
                ('hero_image_credit_name', models.CharField(blank=True, help_text='Name of source of image used in hero if any', max_length=50, null=True, verbose_name='Image credit name')),
                ('hero_image_credit_url', models.URLField(blank=True, help_text='A Link to the original source of the image if any', null=True, verbose_name='Image credit url')),
                ('hero_text', wagtail.fields.RichTextField(blank=True, help_text='A description of the page content', null=True)),
                ('hero_link_caption', models.CharField(blank=True, help_text='Text to display on the link button', max_length=255)),
                ('duration', models.CharField(max_length=255, null=True)),
                ('salary_scale', models.CharField(blank=True, max_length=255)),
                ('application_close_date', models.DateField(blank=True, null=True)),
                ('first_interview_date', models.DateField(blank=True, null=True)),
                ('job_start_date', models.DateField(blank=True, null=True)),
                ('body', wagtail.fields.StreamField([('paragraph_block', wagtail.blocks.StructBlock([('text', wagtail.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'link', 'document', 'image', 'embed', 'blockquote'], icon='fa-paragraph')), ('is_typeset', wagtail.blocks.BooleanBlock(required=False)), ('is_section', wagtail.blocks.BooleanBlock(required=False)), ('classname', wagtail.blocks.CharBlock(help_text='e.g. vacancy pages have a "is-typeset--additionals" class that customises particular areas', required=False))])), ('block_quote', wagtail.blocks.StructBlock([('text', wagtail.blocks.TextBlock())])), ('banner_block', wagtail.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('video', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', icon='fa-s15', required=False, template='blocks/embed_block.html')), ('text', wagtail.blocks.TextBlock()), ('meta', wagtail.blocks.CharBlock(help_text='Anything from a name, location e.t.c - usually to provide credit for the text', required=False)), ('button_caption', wagtail.blocks.CharBlock(required=False)), ('button_link', wagtail.blocks.URLBlock(required=False)), ('button_page', wagtail.blocks.PageChooserBlock(required=False)), ('is_section', wagtail.blocks.BooleanBlock(default=False, required=False))]))], blank=True, verbose_name='Page Body')),
                ('other_pages_heading', models.CharField(blank=True, default='Other pages in this section', max_length=255, verbose_name='Heading')),
                ('hero_image', models.ForeignKey(blank=True, help_text='Hero Image', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image')),
                ('hero_link', models.ForeignKey(blank=True, help_text='Choose a page to link to for the Call to Action', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailcore.Page', verbose_name='Hero link')),
                ('location', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='vacancies.OfficeLocation')),
                ('vacancy', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='users.JobTitle')),
            ],
            options={
                'verbose_name': 'Vacancy Page',
                'db_table': 'vacancy_page',
            },
            bases=('wagtailcore.page',),
        ),
        migrations.CreateModel(
            name='VacanciesPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
                ('hero_title', models.CharField(blank=True, help_text='Leave blank if you want it to match the page title', max_length=255)),
                ('hero_image_credit_name', models.CharField(blank=True, help_text='Name of source of image used in hero if any', max_length=50, null=True, verbose_name='Image credit name')),
                ('hero_image_credit_url', models.URLField(blank=True, help_text='A Link to the original source of the image if any', null=True, verbose_name='Image credit url')),
                ('hero_text', wagtail.fields.RichTextField(blank=True, help_text='A description of the page content', null=True)),
                ('hero_link_caption', models.CharField(blank=True, help_text='Text to display on the link button', max_length=255)),
                ('hero_image', models.ForeignKey(blank=True, help_text='Hero Image', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailimages.Image')),
                ('hero_link', models.ForeignKey(blank=True, help_text='Choose a page to link to for the Call to Action', null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to='wagtailcore.Page', verbose_name='Hero link')),
            ],
            options={
                'verbose_name': 'Vacancies Page',
                'db_table': 'vacancies_page',
            },
            bases=('wagtailcore.page',),
        ),
    ]
