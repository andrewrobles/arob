from django.contrib import admin
from django.urls import path

from api import views
from rest_framework.authtoken import views as auth_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('order/', views.order),
    path('api/login/', auth_views.obtain_auth_token),
    path('api/signup/', views.sign_up),
    path('api/logout/', views.logout),
    path('api/menu/', views.menu),
    path('helloworld/', views.helloworld),
]