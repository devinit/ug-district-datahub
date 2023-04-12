from django.templatetags.static import static
from django.utils.html import format_html

from wagtail import hooks
from wagtail.whitelist import allow_without_attributes, attribute_rule


@hooks.register("insert_editor_css")
def editor_css():

    # Any extra CSS for customising the page editor can be added here as well
    return format_html('<link rel="stylesheet" href="{}">', static("css/editor.css"))


@hooks.register("insert_global_admin_css")
def global_admin_css():
    """Add /static/css/admin.css to the admin."""
    return format_html('<link rel="stylesheet" href="{}">', static("css/admin.css"))


@hooks.register("construct_whitelister_element_rules")
def whitelister_element_rules():
    return {
        "span": attribute_rule({"style": True}),
        "p": attribute_rule({"style": True}),
        "sup": allow_without_attributes,
        "sub": allow_without_attributes,
        "code": allow_without_attributes,
        "blockquote": allow_without_attributes,
        "abbr": attribute_rule({"title": True}),
    }


@hooks.register("insert_editor_js")
def editor_js():
    return format_html(
        """
        <script>
            $('body.create.model-personpage').each(function() {{
                $(function(e) {{
                    if ($('#id_slug').val() == '') {{
                        $('#id_slug').val('placeholder');
                    }}
                }});
            }});
            $('body.page-editor').each(function() {{
                $(function(e) {{
                    $('#id_uuid').closest('.object.char_field').hide();
                }});
            }});
            $(function() {{

                var taxonomyList = $('ul#id_language, ul#id_event_type');
                taxonomyList.find('label:contains("---------")')
                    .contents()
                    .filter(function() {{
                        return this.nodeType == 3
                    }}).each(function() {{
                        this.textContent = this.textContent.replace('---------', 'None');
                    }});
            }});
        </script>
        """
    )
