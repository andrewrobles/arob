from django.db import models


class Order(models.Model):
    items = models.ManyToManyField('Item')

    @classmethod
    def get_singleton(self):
        if Order.objects.count() == 0:
            return self.objects.create()
        else:
            return self.objects.first()

    def get_items(self):
        return [{'name': item.name, 'ingredients': 
        [ingredient.name for ingredient in item.ingredients.all()]} 
        for item in self.items.all()]

class Item(models.Model):
    name = models.CharField(max_length=50)
    ingredients = models.ManyToManyField('Ingredient')
    price = models.DecimalField(max_digits=5, decimal_places=2)
    extras = models.ManyToManyField('Extra')

    def __str__(self):
        return self.name


class Ingredient(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Extra(models.Model):
    name = models.CharField(max_length=50)
    price = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.name