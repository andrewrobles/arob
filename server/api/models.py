from django.db import models

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