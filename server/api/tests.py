from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from api.models import Item, Ingredient

class TestApi(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.item1 = Item.objects.create(name='Toast', price=5)
        self.item1.ingredients.add(Ingredient.objects.create(name='Bread'))
        self.item1.ingredients.add(Ingredient.objects.create(name='Butter'))
        self.item2 = Item.objects.create(name='Milk', price=2)

    def test_get_menu(self):
        actual = self.client.get('/api/menu/', format='json').data
        expected = [
            {
                'name': 'Toast',
                'ingredients': ['Bread', 'Butter']
            },
            {
                'name': 'Milk',
                'ingredients': []
            }
        ]

        self.assertEqual(actual, expected)