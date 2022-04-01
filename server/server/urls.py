from django.contrib import admin
from django.urls import path

from api import views
from rest_framework.authtoken import views as auth_views

urlpatterns = [
    path('menu/', views.menu),
    path('', admin.site.urls),
]