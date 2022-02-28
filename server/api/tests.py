from django.test import TestCase
from rest_framework.test import APIClient

class HelloWorldTestCase(TestCase):
    def test_get_hello_world(self):
        factory = APIClient()
        actual = factory.get('/helloworld/', format='json').data
        expected = {'message': 'Hello World!'}

        self.assertEqual(actual, expected)

        
class LoginTestCase(TestCase):
    def test_login(self):
        factory = APIClient()
        body = {
            'username': 'username',
            'password': 'password'
        }
        response = factory.post('/api/login/', body, format='json').data
        print('response: {}'.format(response))
        self.assertTrue('token' in response)