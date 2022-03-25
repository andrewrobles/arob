from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from api.models import Order, OrderedItem, Item, Ingredient, Extra

class TestApi(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.item1 = Item.objects.create(name='Toast', price=5)
        self.item1.ingredients.add(Ingredient.objects.create(name='Bread'))
        self.item1.ingredients.add(Ingredient.objects.create(name='Butter'))
        self.item2 = Item.objects.create(name='Milk', price=2)
        self.extra = Extra.objects.create(name='Avocado', price=1)

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

    def test_add_items(self):  
        self.client.post('/order/', [{'id': self.item1.id}, {'id': self.item1.id}], format='json')
        self.assertEqual(len(Order.singleton().ordered_items.all()), 2)

    def test_add_extras(self):        
        self.client.post('/order/', [{'id': self.item1.id, 'extras': [{'id': self.extra.id}]}], format='json')
        self.assertEqual(len(Order.singleton().ordered_items.all()[0].extras.all()), 1)

    def test_get_order(self):
        self.client.post('/order/', [{'id': self.item1.id}], format='json')
        actual = self.client.get('/order/').data
        expected = [
            {
                'id': self.item1.id,
                'name': 'Toast',
                'ingredients': ['Bread', 'Butter']
            }
        ]
        self.assertEqual(actual, expected)

    def test_clear_order(self):
        self.client.post('/order/', [{'id': self.item1.id}], format='json')
        self.client.delete('/order/', format='json')
        self.assertEqual(len(Order.singleton().ordered_items.all()), 0)

    def test_str_method(self):
        self.client.post('/order/', [{'id': self.item1.id}], format='json')
        self.client.post('/order/', [{'id': self.item2.id}], format='json')
        self.assertEqual(Order.singleton().__str__(), 'Toast, Milk')