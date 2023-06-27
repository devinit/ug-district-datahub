from django.urls import path, reverse

from wagtail import hooks
from wagtail.admin.menu import Menu, MenuItem, SubmenuMenuItem

from .views import entities, documents, workflows


@hooks.register("register_admin_urls")
def register_pipeline_urls():
    return [
        path("pipeline/entity", entities, name="entities"),
        path("pipeline/documents", documents, name="documents"),
        path("pipeline/workflows", workflows, name="workflows"),
    ]


@hooks.register("register_admin_menu_item")
def register_pipeline_menu_item():
    submenu = Menu(
        items=[
            MenuItem("Entities", reverse("entities"), icon_name="radio-empty"),
            MenuItem("Documents", reverse("documents"), icon_name="radio-full"),
            MenuItem("Workflows", reverse("workflows"), icon_name="radio-empty"),
        ]
    )

    return SubmenuMenuItem("Pipeline", submenu, icon_name="radio-full")
