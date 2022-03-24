from api.models import Item, Ingredient, Extra

from menu import menu

for item in Item.objects.all():
    item.delete()
for ingredient in Ingredient.objects.all():
    ingredient.delete()
for extra in Extra.objects.all():
    extra.delete()

for extra_data in menu['extras']:
    Extra.objects.create(name=extra_data['name'].title(), price=extra_data['price'])

for sandwhich_data in menu['items']:
    item = Item.objects.create(name=sandwhich_data['name'].title(), price=sandwhich_data['price'])
    for ingredient_data in sandwhich_data['ingredients']:
        try:
            ingredient = Ingredient.objects.get(name=ingredient_data.title())
        except Ingredient.DoesNotExist:
            ingredient = Ingredient.objects.create(name=ingredient_data.title())
        item.ingredients.add(ingredient)
    item.save()