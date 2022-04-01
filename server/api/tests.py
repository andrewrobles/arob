from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from api.models import Item

class TestApi(TestCase):
    def setUp(self):
        self.client = APIClient()
        Item.objects.create(name='Toast', price=5, description='Bread & butter')
        Item.objects.create(name='Milk', price=2)

    def test_get_menu(self):
        actual = self.client.get('/api/menu/', format='json').data
        expected = [
            {
                'name': 'Toast',
                'description': 'Bread & butter',
                'price': 5.0
            },
            {
                'name': 'Milk',
                'description': '',
                'price': 2.0
            }
        ]

        self.assertEqual(actual, expected)