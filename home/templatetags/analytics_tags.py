import os
from django import template

register = template.Library()

@register.simple_tag
def get_env_variable(name):
    return os.environ.get(name, '')

@register.simple_tag
def get_district_variable_name(root_url):
    url_parts = root_url.split('//')
    if len(url_parts) > 1:
        domain = url_parts[1]
        domain_parts = domain.split('.')
        if len(domain_parts) > 1:
            district = domain_parts[0].upper()
            return f"{district}_TAG_ID"
    return None
