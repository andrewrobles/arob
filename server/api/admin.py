from django.contrib import admin

from .models import Item, Ingredient, Extra

admin.site.register(Item)
admin.site.register(Ingredient)
admin.site.register(Extra)