from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from api.models import Item

class TestApi(TestCase):
    def setUp(self):
        self.client = APIClient()
        Item.objects.create(name='Toast', description='Bread & butter')
        Item.objects.create(name='Milk')

    def test_get_menu(self):
        actual = self.client.get('/menu/', format='json').data
        expected = [
            {
                'name': 'Toast',
                'description': 'Bread & butter',
            },
            {
                'name': 'Milk',
                'description': '',
            }
        ]

        self.assertEqual(actual, expected)