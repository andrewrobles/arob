from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth.models import User
from api.models import Order, Item, Ingredient, Extra


class TestApi(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.item1 = Item.objects.create(name='Toast', price=5)
        self.item1.ingredients.add(Ingredient.objects.create(name='Bread'))
        self.item1.ingredients.add(Ingredient.objects.create(name='Butter'))
        self.extra = Extra.objects.create(name='Avocado', price=1)

    def test_get_menu(self):
        actual = self.client.get('/api/menu/', format='json').data
        expected = [
            {
                'name': 'Toast',
                'ingredients': ['Bread', 'Butter']
            }
        ]

        self.assertEqual(actual, expected)

    def test_add_item_to_order(self):  
        response = self.client.post('/api/order/', {'id': self.item1.id})
        self.assertEqual(len(Order.singleton().items.all()), 1)

    def test_add_item_with_extra_to_order(self):
        response = self.client.post('/api/order/', {
            'id': self.item1.id,
            'extras': [{'id': self.extra.id}]
        }, format='json')
        self.assertEqual(len(Order.singleton().items.all()[0].extras.all()), 1)

    def test_get_order(self):
        self.client.post('/api/order/', {'id': self.item1.id})
        actual = self.client.get('/api/order/').data
        expected = [
            {
                'name': 'Toast',
                'ingredients': ['Bread', 'Butter']
            }
        ]
        self.assertEqual(actual, expected)

    def test_remove_from_order(self):
        self.client.post('/api/order/', {'id': self.item1.id}, format='json')
        self.client.delete('/api/order/', {'id': self.item1.id}, format='json')
        self.assertEqual(len(Order.singleton().items.all()), 0)

    def test_str_method(self):
        self.item2 = Item.objects.create(name='Milk', price=2)
        self.client.post('/api/order/', {'id': self.item1.id})
        self.client.post('/api/order/', {'id': self.item2.id})
        self.assertEqual(Order.singleton().__str__(), 'Toast, Milk')


class HelloWorldTestCase(TestCase):
    def test_get_hello_world(self):
        factory = APIClient()
        actual = factory.get('/helloworld/', format='json').data
        expected = {'message': 'Hello World!'}
        self.assertEqual(actual, expected)

        
class AuthTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.credentials = {'username': 'johndoe', 'password': 'testpassword'}

    def test_incorrect_login(self):
        response = self.client.post('/api/login/', self.credentials, format='json')
        self.assertNotEqual(list(response.data.keys()), ['token'])

    def test_correct_login(self):
        user = User.objects.create_user(**self.credentials)
        response = self.client.post('/api/login/', self.credentials, format='json')
        self.assertEqual(list(response.data.keys()), ['token'])

    def test_sign_up(self):
        self.client.post('/api/signup/', self.credentials, format='json')
        response = self.client.post('/api/login/', self.credentials, format='json')
        self.assertEqual(list(response.data.keys()), ['token'])

    def test_log_out(self):
        self.client.post('/api/signup/', self.credentials, format='json')
        first_token = self.client.post('/api/login/', self.credentials, format='json').data['token']
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + first_token)
        response = self.client.get('/api/logout/', format='json')

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, {'token': None})

        self.client.credentials(HTTP_AUTHORIZATION='')
        response = self.client.post('/api/login/', self.credentials, format='json')
        self.assertNotEqual(first_token, response.data['token'])