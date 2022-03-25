from django.contrib import admin
from django.urls import path

from api import views
from rest_framework.authtoken import views as auth_views

urlpatterns = [
    path('', admin.site.urls),
    path('order/', views.order),
    path('api/menu/', views.menu),
]