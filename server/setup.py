from api.models import Item

from menu import menu

if Item.objects.count() == 0:
    for item in menu:
        Item.objects.create(name=item['name'].title(), price=item['price'], description=item['description'])