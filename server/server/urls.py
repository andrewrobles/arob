from django.contrib import admin
from django.urls import path

from api import views
from rest_framework.authtoken import views as authviews

urlpatterns = [
    path('admin/', admin.site.urls),
    path('helloworld/', views.helloworld, name='helloworld'),
    path('api/login/', views.CustomAuthToken.as_view())
]