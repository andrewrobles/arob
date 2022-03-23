from django.db import models

class Order(models.Model):
    ordered_items = models.ManyToManyField('OrderedItem')

    @classmethod
    def singleton(cls):
        if cls.objects.count() == 0:
            return cls.objects.create()
        else:
            return cls.objects.first()

    def get_items(self):
        return [{'name': ordered_item.item.name, 'ingredients': 
        [ingredient.name for ingredient in ordered_item.item.ingredients.all()]} 
        for ordered_item in self.ordered_items.all()]

    def __str__(self):
        return ', '.join([ordered_item.__str__() for ordered_item in self.ordered_items.all()])

class OrderedItem(models.Model):
    item = models.ForeignKey('Item', on_delete=models.CASCADE)
    extras = models.ManyToManyField('Extra')

    def __str__(self):
        return self.item.__str__()
    
class Item(models.Model):
    name = models.CharField(max_length=50)
    ingredients = models.ManyToManyField('Ingredient')
    price = models.DecimalField(max_digits=5, decimal_places=2)

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