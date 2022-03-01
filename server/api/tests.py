from django.test import TestCase
from rest_framework.test import APIClient
from django.contrib.auth.models import User

class HelloWorldTestCase(TestCase):
    def test_get_hello_world(self):
        factory = APIClient()
        actual = factory.get('/helloworld/', format='json').data
        expected = {'message': 'Hello World!'}

        self.assertEqual(actual, expected)

        
class AuthTestCase(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.credentials = {'username': 'abcde', 'password': '1234'}

    def test_incorrect_login(self):
        response = self.client.post('/api/login/', self.credentials, format='json')
        self.assertFalse('token' in response.data)

    def test_correct_login(self):
        user = User.objects.create_user(**self.credentials)
        response = self.client.post('/api/login/', self.credentials, format='json')

        self.assertTrue('token' in response.data)

    def test_sign_up(self):
        self.client.post('/api/signup/', self.credentials, format='json')
        response = self.client.post('/api/login/', self.credentials, format='json')

        self.assertTrue('token' in response.data)
