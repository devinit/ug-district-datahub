# Generated by Django 4.1.13 on 2024-03-25 11:18

from django.db import migrations
import wagtail.blocks
import wagtail.documents.blocks
import wagtail.embeds.blocks
import wagtail.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0009_alter_homepage_sections_alter_standardpage_sections'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepage',
            name='sections',
            field=wagtail.fields.StreamField([('anchor', wagtail.blocks.StructBlock([('anchor_id', wagtail.blocks.CharBlock(help_text='The unique indentifier for this anchor', required=True))], icon='radio-full')), ('paragraph_block', wagtail.blocks.StructBlock([('text', wagtail.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed'])), ('center', wagtail.blocks.BooleanBlock(default=False, required=False))], icon='radio-full')), ('block_quote', wagtail.blocks.StructBlock([('text', wagtail.blocks.TextBlock()), ('source', wagtail.blocks.TextBlock(help_text='Who is this quote acredited to?', required=False)), ('center', wagtail.blocks.BooleanBlock(default=False, required=False))], icon='radio-full')), ('banner_block', wagtail.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('image_credit_name', wagtail.blocks.TextBlock(help_text='The name of the image source', required=False)), ('image_credit_url', wagtail.blocks.URLBlock(help_text='A link to the image source, if any', required=False)), ('video', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', icon='fa-video-camera', required=False, template='blocks/embed_block.html')), ('text', wagtail.blocks.StreamBlock([('text_heading', wagtail.blocks.CharBlock(icon='title', required=False, template='blocks/banner/text_heading.html')), ('text', wagtail.blocks.TextBlock(template='blocks/banner/text.html')), ('richtext', wagtail.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed'], template='blocks/banner/richtext.html')), ('list', wagtail.blocks.ListBlock(wagtail.blocks.StructBlock([('title', wagtail.blocks.TextBlock(help_text='An optional title to the list item', required=False)), ('content', wagtail.blocks.TextBlock(help_text='The list item content', required=True))], template='blocks/banner/list_item.html'), icon='list-ul', template='blocks/banner/list.html'))])), ('meta', wagtail.blocks.CharBlock(help_text='Anything from a name, location e.t.c - usually to provide credit for the text', required=False)), ('buttons', wagtail.blocks.StreamBlock([('button', wagtail.blocks.StructBlock([('caption', wagtail.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('document_box', wagtail.blocks.StructBlock([('box_heading', wagtail.blocks.CharBlock(icon='title', required=False)), ('documents', wagtail.blocks.StreamBlock([('document', wagtail.documents.blocks.DocumentChooserBlock())], required=False)), ('dark_mode', wagtail.blocks.BooleanBlock(default=False, help_text='Red on white if unchecked. White on dark grey if checked.', required=False))]))], required=False)), ('media_orientation', wagtail.blocks.ChoiceBlock(choices=[('left', 'Left'), ('right', 'Right')], required=False)), ('light', wagtail.blocks.BooleanBlock(default=False, help_text='Sets the background to a lighter colour', required=False))], icon='radio-full')), ('downloads', wagtail.blocks.StructBlock([('section_heading', wagtail.blocks.TextBlock(required=False)), ('section_sub_heading', wagtail.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed'], required=False)), ('document_box_heading', wagtail.blocks.CharBlock(icon='title', required=False)), ('document_boxes', wagtail.blocks.StreamBlock([('document_box', wagtail.blocks.StructBlock([('box_heading', wagtail.blocks.CharBlock(icon='title', required=False)), ('documents', wagtail.blocks.StreamBlock([('document', wagtail.documents.blocks.DocumentChooserBlock())], required=False)), ('dark_mode', wagtail.blocks.BooleanBlock(default=False, help_text='Red on white if unchecked. White on dark grey if checked.', required=False))]))], required=False)), ('alt', wagtail.blocks.BooleanBlock(default=True, help_text='White background if checked', required=False))])), ('image', wagtail.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('credit_name', wagtail.blocks.CharBlock(help_text='Name of the image source', required=False)), ('credit_url', wagtail.blocks.URLBlock(help_text='URL of the image source', required=False)), ('caption', wagtail.blocks.CharBlock(help_text='Caption to appear beneath the image', required=False))], icon='image')), ('image_duo', wagtail.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('credit_name', wagtail.blocks.CharBlock(help_text='Name of the image source', required=False)), ('credit_url', wagtail.blocks.URLBlock(help_text='URL of the image source', required=False)), ('caption', wagtail.blocks.CharBlock(help_text='Caption to appear beneath the image', required=False)), ('heading', wagtail.blocks.CharBlock(icon='fa-heading', required=False)), ('side_text', wagtail.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed'], icon='fa-paragraph', required=True, template='blocks/paragraph_block.html')), ('button', wagtail.blocks.StructBlock([('caption', wagtail.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('alt', wagtail.blocks.BooleanBlock(default=False, help_text='White background if checked.', required=False))], icon='image')), ('video_duo', wagtail.blocks.StructBlock([('heading', wagtail.blocks.CharBlock(help_text='Section heading', icon='fa-heading', required=False)), ('video', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', icon='fa-video-camera', required=False, template='blocks/embed_block.html')), ('side_text', wagtail.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed'], icon='fa-paragraph', required=True, template='blocks/paragraph_block.html')), ('button', wagtail.blocks.StructBlock([('caption', wagtail.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('alt', wagtail.blocks.BooleanBlock(default=False, help_text='White background if checked.', required=False))], icon='media')), ('full_width_video_block', wagtail.blocks.StructBlock([('video', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', required=False))], icon='media')), ('custom_embed', wagtail.blocks.StructBlock([('embed_type', wagtail.blocks.ChoiceBlock(choices=[('buzzsprout', 'Buzzsprout')])), ('embed_url', wagtail.blocks.URLBlock(help_text='The URL contained within the embed provider source code.', required=True))], icon='media')), ('cta', wagtail.blocks.StructBlock([('title', wagtail.blocks.CharBlock(label='Title', required=True)), ('body', wagtail.blocks.TextBlock(help_text='Optional: describe the purpose of your call to action in a bit more detail', label='Description', required=False)), ('button_text', wagtail.blocks.CharBlock(help_text='Optional: this is required to show the button', label='Button Caption', required=False)), ('button_url', wagtail.blocks.URLBlock(help_text='Optional: this is required to show the button', label='Button URL', required=False)), ('button_page', wagtail.blocks.PageChooserBlock(help_text='Optional: has priority over the button URL field', label='Button Page', required=False))], icon='radio-full', template='blocks/section_call_to_action.html')), ('accordion', wagtail.blocks.StructBlock([('accordion_items', wagtail.blocks.ListBlock(wagtail.blocks.StructBlock([('name', wagtail.blocks.TextBlock(icon='fa-text')), ('description', wagtail.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed'], icon='fa-paragraph', template='blocks/paragraph_block.html'))])))])), ('dashboards', wagtail.blocks.StructBlock([('dashboards', wagtail.blocks.ListBlock(wagtail.blocks.StructBlock([('page', wagtail.blocks.PageChooserBlock(page_type=['dashboard.NarrativeDashboardPage'])), ('icon', wagtail.blocks.ChoiceBlock(choices=[('education', 'Education'), ('agriculture', 'Agriculture')], required=False))]))), ('child_dashboards_title', wagtail.blocks.CharBlock(default='Dashboards', help_text='Optional: the title of the child dashboards accordion', required=False)), ('related_datasets_title', wagtail.blocks.TextBlock(default='Datasets', help_text='Optional: the title of the related datasets accordion', required=False)), ('show_dashboards', wagtail.blocks.BooleanBlock(default=True, required=False)), ('show_datasets', wagtail.blocks.BooleanBlock(default=True, required=False))])), ('latest_datasets', wagtail.blocks.StructBlock([('centered', wagtail.blocks.BooleanBlock(default=False, required=False))])), ('interactive_chart', wagtail.blocks.StructBlock([('show_title', wagtail.blocks.BooleanBlock(default=True, required=False)), ('allow_share', wagtail.blocks.BooleanBlock(default=True, required=False)), ('chart_page', wagtail.blocks.PageChooserBlock(page_type=['dashboard.ChartPage', 'dashboard.RawCodePage']))]))], blank=True, null=True, use_json_field=True, verbose_name='Sections'),
        ),
        migrations.AlterField(
            model_name='standardpage',
            name='sections',
            field=wagtail.fields.StreamField([('anchor', wagtail.blocks.StructBlock([('anchor_id', wagtail.blocks.CharBlock(help_text='The unique indentifier for this anchor', required=True))], icon='radio-full')), ('paragraph_block', wagtail.blocks.StructBlock([('text', wagtail.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed'])), ('center', wagtail.blocks.BooleanBlock(default=False, required=False))], icon='radio-full')), ('block_quote', wagtail.blocks.StructBlock([('text', wagtail.blocks.TextBlock()), ('source', wagtail.blocks.TextBlock(help_text='Who is this quote acredited to?', required=False)), ('center', wagtail.blocks.BooleanBlock(default=False, required=False))], icon='radio-full')), ('banner_block', wagtail.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('image_credit_name', wagtail.blocks.TextBlock(help_text='The name of the image source', required=False)), ('image_credit_url', wagtail.blocks.URLBlock(help_text='A link to the image source, if any', required=False)), ('video', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', icon='fa-video-camera', required=False, template='blocks/embed_block.html')), ('text', wagtail.blocks.StreamBlock([('text_heading', wagtail.blocks.CharBlock(icon='title', required=False, template='blocks/banner/text_heading.html')), ('text', wagtail.blocks.TextBlock(template='blocks/banner/text.html')), ('richtext', wagtail.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed'], template='blocks/banner/richtext.html')), ('list', wagtail.blocks.ListBlock(wagtail.blocks.StructBlock([('title', wagtail.blocks.TextBlock(help_text='An optional title to the list item', required=False)), ('content', wagtail.blocks.TextBlock(help_text='The list item content', required=True))], template='blocks/banner/list_item.html'), icon='list-ul', template='blocks/banner/list.html'))])), ('meta', wagtail.blocks.CharBlock(help_text='Anything from a name, location e.t.c - usually to provide credit for the text', required=False)), ('buttons', wagtail.blocks.StreamBlock([('button', wagtail.blocks.StructBlock([('caption', wagtail.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('document_box', wagtail.blocks.StructBlock([('box_heading', wagtail.blocks.CharBlock(icon='title', required=False)), ('documents', wagtail.blocks.StreamBlock([('document', wagtail.documents.blocks.DocumentChooserBlock())], required=False)), ('dark_mode', wagtail.blocks.BooleanBlock(default=False, help_text='Red on white if unchecked. White on dark grey if checked.', required=False))]))], required=False)), ('media_orientation', wagtail.blocks.ChoiceBlock(choices=[('left', 'Left'), ('right', 'Right')], required=False)), ('light', wagtail.blocks.BooleanBlock(default=False, help_text='Sets the background to a lighter colour', required=False))], icon='radio-full')), ('downloads', wagtail.blocks.StructBlock([('section_heading', wagtail.blocks.TextBlock(required=False)), ('section_sub_heading', wagtail.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed'], required=False)), ('document_box_heading', wagtail.blocks.CharBlock(icon='title', required=False)), ('document_boxes', wagtail.blocks.StreamBlock([('document_box', wagtail.blocks.StructBlock([('box_heading', wagtail.blocks.CharBlock(icon='title', required=False)), ('documents', wagtail.blocks.StreamBlock([('document', wagtail.documents.blocks.DocumentChooserBlock())], required=False)), ('dark_mode', wagtail.blocks.BooleanBlock(default=False, help_text='Red on white if unchecked. White on dark grey if checked.', required=False))]))], required=False)), ('alt', wagtail.blocks.BooleanBlock(default=True, help_text='White background if checked', required=False))])), ('image', wagtail.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('credit_name', wagtail.blocks.CharBlock(help_text='Name of the image source', required=False)), ('credit_url', wagtail.blocks.URLBlock(help_text='URL of the image source', required=False)), ('caption', wagtail.blocks.CharBlock(help_text='Caption to appear beneath the image', required=False))], icon='image')), ('image_duo', wagtail.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock(required=True)), ('credit_name', wagtail.blocks.CharBlock(help_text='Name of the image source', required=False)), ('credit_url', wagtail.blocks.URLBlock(help_text='URL of the image source', required=False)), ('caption', wagtail.blocks.CharBlock(help_text='Caption to appear beneath the image', required=False)), ('heading', wagtail.blocks.CharBlock(icon='fa-heading', required=False)), ('side_text', wagtail.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed'], icon='fa-paragraph', required=True, template='blocks/paragraph_block.html')), ('button', wagtail.blocks.StructBlock([('caption', wagtail.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('alt', wagtail.blocks.BooleanBlock(default=False, help_text='White background if checked.', required=False))], icon='image')), ('video_duo', wagtail.blocks.StructBlock([('heading', wagtail.blocks.CharBlock(help_text='Section heading', icon='fa-heading', required=False)), ('video', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', icon='fa-video-camera', required=False, template='blocks/embed_block.html')), ('side_text', wagtail.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed'], icon='fa-paragraph', required=True, template='blocks/paragraph_block.html')), ('button', wagtail.blocks.StructBlock([('caption', wagtail.blocks.CharBlock(help_text='Leave blank if you wish to use the page title as a caption', required=False)), ('page', wagtail.blocks.PageChooserBlock(help_text='For the link/button to show, either this or the url are required', required=False)), ('url', wagtail.blocks.URLBlock(help_text='An alternative to an internal page', required=False))])), ('alt', wagtail.blocks.BooleanBlock(default=False, help_text='White background if checked.', required=False))], icon='media')), ('full_width_video_block', wagtail.blocks.StructBlock([('video', wagtail.embeds.blocks.EmbedBlock(help_text='Insert an embed URL e.g https://www.youtube.com/embed/SGJFWirQ3ks', required=False))], icon='media')), ('custom_embed', wagtail.blocks.StructBlock([('embed_type', wagtail.blocks.ChoiceBlock(choices=[('buzzsprout', 'Buzzsprout')])), ('embed_url', wagtail.blocks.URLBlock(help_text='The URL contained within the embed provider source code.', required=True))], icon='media')), ('cta', wagtail.blocks.StructBlock([('title', wagtail.blocks.CharBlock(label='Title', required=True)), ('body', wagtail.blocks.TextBlock(help_text='Optional: describe the purpose of your call to action in a bit more detail', label='Description', required=False)), ('button_text', wagtail.blocks.CharBlock(help_text='Optional: this is required to show the button', label='Button Caption', required=False)), ('button_url', wagtail.blocks.URLBlock(help_text='Optional: this is required to show the button', label='Button URL', required=False)), ('button_page', wagtail.blocks.PageChooserBlock(help_text='Optional: has priority over the button URL field', label='Button Page', required=False))], icon='radio-full', template='blocks/section_call_to_action.html')), ('accordion', wagtail.blocks.StructBlock([('accordion_items', wagtail.blocks.ListBlock(wagtail.blocks.StructBlock([('name', wagtail.blocks.TextBlock(icon='fa-text')), ('description', wagtail.blocks.RichTextBlock(features=['h2', 'h3', 'h4', 'bold', 'italic', 'ol', 'ul', 'hr', 'link', 'document-link', 'image', 'embed'], icon='fa-paragraph', template='blocks/paragraph_block.html'))])))])), ('dashboards', wagtail.blocks.StructBlock([('dashboards', wagtail.blocks.ListBlock(wagtail.blocks.StructBlock([('page', wagtail.blocks.PageChooserBlock(page_type=['dashboard.NarrativeDashboardPage'])), ('icon', wagtail.blocks.ChoiceBlock(choices=[('education', 'Education'), ('agriculture', 'Agriculture')], required=False))]))), ('child_dashboards_title', wagtail.blocks.CharBlock(default='Dashboards', help_text='Optional: the title of the child dashboards accordion', required=False)), ('related_datasets_title', wagtail.blocks.TextBlock(default='Datasets', help_text='Optional: the title of the related datasets accordion', required=False)), ('show_dashboards', wagtail.blocks.BooleanBlock(default=True, required=False)), ('show_datasets', wagtail.blocks.BooleanBlock(default=True, required=False))])), ('latest_datasets', wagtail.blocks.StructBlock([('centered', wagtail.blocks.BooleanBlock(default=False, required=False))])), ('interactive_chart', wagtail.blocks.StructBlock([('show_title', wagtail.blocks.BooleanBlock(default=True, required=False)), ('allow_share', wagtail.blocks.BooleanBlock(default=True, required=False)), ('chart_page', wagtail.blocks.PageChooserBlock(page_type=['dashboard.ChartPage', 'dashboard.RawCodePage']))]))], blank=True, null=True, use_json_field=True, verbose_name='Sections'),
        ),
    ]
