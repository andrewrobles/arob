from django.contrib import admin

from .models import Item, AuthCode

admin.site.register(Item)
admin.site.register(AuthCode)
