from api.models import Item, Ingredient, Extra

from menu import menu

if Item.objects.count() == 0 and Ingredient.objects.count() == 0 and Extra.objects.count() == 0:
    for extra_data in menu['extras']:
        Extra.objects.create(name=extra_data['name'].title(), price=extra_data['price'])

    for items in menu['items']:
        item = Item.objects.create(name=items['name'].title(), price=items['price'])
        for ingredient_data in items['ingredients']:
            try:
                ingredient = Ingredient.objects.get(name=ingredient_data.title())
            except Ingredient.DoesNotExist:
                ingredient = Ingredient.objects.create(name=ingredient_data.title())
            item.ingredients.add(ingredient)
        item.save()