from django.db import models


class Order(models.Model):
    order_items = models.ManyToManyField('OrderItem')

    @classmethod
    def singleton(cls):
        if cls.objects.count() == 0:
            return cls.objects.create()
        else:
            return cls.objects.first()

    def get_items(self):
        return [{'name': item.menu_item.name, 'ingredients': 
        [ingredient.name for ingredient in item.menu_item.ingredients.all()]} 
        for item in self.order_items.all()]

    def __str__(self):
        return ', '.join([item.__str__() for item in self.items.order_by('-price')])

class OrderItem(models.Model):
    menu_item = models.ForeignKey('MenuItem', on_delete=models.CASCADE)
    extras = models.ManyToManyField('Extra')
    
class MenuItem(models.Model):
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