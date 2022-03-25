from django.contrib import admin

from .models import Item, Ingredient, Extra, Order, OrderedItem

admin.site.register(Item)
admin.site.register(Ingredient)
admin.site.register(Extra)
admin.site.register(Order)
admin.site.register(OrderedItem)