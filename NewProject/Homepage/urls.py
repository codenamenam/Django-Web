from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name = "index"),
    path("page1", views.SubPage1, name = "page1"),
    path("page2", views.SubPage2, name="page2")
]