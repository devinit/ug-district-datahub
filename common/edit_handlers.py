from django.utils.html import format_html
from django.utils.translation import gettext_lazy as _
from django.utils.html import mark_safe

from wagtail.admin.panels import EditHandler
from wagtail.admin.panels import HelpPanel as WagtailHelpPanel
from wagtail.admin.panels import MultiFieldPanel as WagtailMultiFieldPanel


class BaseReadOnlyPanel(EditHandler):
    def render(self):
        value = getattr(self.instance, self.field_name)
        if callable(value):
            value = value()
        return format_html(
            '<div style="padding-top: 1.2em;">{}</div>', mark_safe(value)
        )

    def render_as_object(self):
        return format_html(
            "<fieldset><legend>{}</legend>"
            '<ul class="fields"><li><div class="field">{}</div></li></ul>'
            "</fieldset>",
            self.heading,
            self.render(),
        )

    def render_as_field(self):
        return format_html(
            '<div class="field">'
            "<label>{}{}</label>"
            '<div class="field-content">{}</div>'
            "</div>",
            self.heading,
            _(":"),
            self.render(),
        )


class ReadOnlyPanel(BaseReadOnlyPanel):
    """
    Custom implementation of readonly panel, refer to issue on from wagtail
    https://github.com/wagtail/wagtail/issues/2893
    """

    def __init__(self, field_name, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.field_name = field_name

    def clone_kwargs(self):
        kwargs = super().clone_kwargs()
        kwargs.update(field_name=self.field_name)
        return kwargs

    def bind_to_model(self, model):
        return type(
            str(_("ReadOnlyPanel")),
            (BaseReadOnlyPanel,),
            {"model": self.model, "heading": self.heading, "classname": self.classname},
        )


def HelpPanel(
    content="",
    template="wagtailadmin/panels/help_panel.html",
    heading="",
    classname="",
    wrapper_class="help-block help-info",
):
    """Define a help text panel."""
    wrapped_content = (
        '<div class="%s"><svg class="icon icon-help" aria-hidden="true"><use href="#icon-help"></use></svg>%s</div>'
        % (wrapper_class, content)
    )
    return WagtailHelpPanel(
        content=wrapped_content, template=template, heading=heading, classname=classname
    )


class MultiFieldPanel(WagtailMultiFieldPanel):
    def __init__(self, children=(), *args, **kwargs):
        if kwargs.get("description", None):
            self.description = kwargs.pop("description")
        super().__init__(children, *args, **kwargs)

    def clone(self):
        props = {
            "children": self.children,
            "heading": self.heading,
            "classname": self.classname,
            "help_text": self.help_text,
        }
        if hasattr(self, "description"):
            props["description"] = self.description
        return self.__class__(**props)
