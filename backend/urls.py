from django.contrib import admin
from django.urls import path, include

from django.shortcuts import redirect

def home(request):
    return redirect("https://comfy-taffy-5f4130.netlify.app/")

urlpatterns = [
    path("", home),
    path("admin/", admin.site.urls),
    path("api/", include("tasks.urls")),
]
