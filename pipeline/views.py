from django.shortcuts import render
from django.conf import settings


def entities(request):
    return render(request, "pipeline/entities.html", {"DEBUG": settings.DEBUG})


def documents(request):
    return render(request, "pipeline/documents.html", {"DEBUG": settings.DEBUG})


def workflows(request):
    return render(request, "pipeline/workflows.html", {"DEBUG": settings.DEBUG})
