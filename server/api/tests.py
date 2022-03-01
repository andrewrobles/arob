from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth.models import User

class HelloWorldTestCase(TestCase):
    def test_get_hello_world(self):
        factory = APIClient()
        actual = factory.get('/helloworld/', format='json').data
        expected = {'message': 'Hello World!'}

        self.assertEqual(actual, expected)

        
class LoginTestCase(TestCase):
    def test_incorrect_login(self):
        factory = APIClient()

        body = {'username': 'abcde', 'password': '1234'}
        response = factory.post('/api/login/', body, format='json').data

        self.assertFalse('token' in response)

    def test_correct_login(self):
        factory = APIClient()

        user = User.objects.create_user(username='abcde', password='1234')
        body = {'username': 'abcde', 'password': '1234'}
        response = factory.post('/api/login/', body, format='json').data

        self.assertTrue('token' in response)

