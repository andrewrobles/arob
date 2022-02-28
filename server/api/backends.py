from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.models import User

class CustomBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None):
        return User.objects.create(username=username, password=password)        