from django.contrib import admin
from django.urls import path, include

from django.http import JsonResponse

def home(request):
    return JsonResponse({
        "status": "online",
        "project": "TaskFlow API",
        "version": "1.0.0",
        "endpoints": {
            "tasks": "/api/tasks/",
            "admin": "/admin/"
        }
    })

urlpatterns = [
    path("", home),
    path("admin/", admin.site.urls),
    path("api/", include("tasks.urls")),
]
