from django import template

register = template.Library()

@register.simple_tag(takes_context=True)
def page_contains_chart(context):
    charts = {'plotly_studio': False, 'advanced': False}
    self = context.get('page')
    try:
        content = self.tools if hasattr(self, 'tools') else self.content
        for item in content:
            if item.block.name == 'interactive_chart':
                charts['plotly_studio'] = True
            elif item.block.name == 'advanced_interactive_chart':
                charts['advanced'] = True

        return charts
    except Exception:
        return charts
