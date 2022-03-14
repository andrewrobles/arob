import json
from api.models import Item, Ingredient, Extra

file = open("menu.json")
data = json.load(file)
file.close()

for item in Item.objects.all():
    item.delete()
for ingredient in Ingredient.objects.all():
    ingredient.delete()
for extra in Extra.objects.all():
    extra.delete()

for extra_data in data['extras']:
    Extra.objects.create(name=extra_data['name'].title(), price=extra_data['price'])

for sandwhich_data in data['sandwhiches']:
    item = Item.objects.create(name=sandwhich_data['name'].title(), price=sandwhich_data['price'])
    for ingredient_data in sandwhich_data['ingredients']:
        try:
            ingredient = Ingredient.objects.get(name=ingredient_data.title())
        except Ingredient.DoesNotExist:
            ingredient = Ingredient.objects.create(name=ingredient_data.title())
        item.ingredients.add(ingredient)
    item.save()