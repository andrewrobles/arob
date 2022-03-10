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

class UtilsTestCase(TestCase):
    def test_google_search(self):
        from .utils import google_search

        search_query = 'fb stock'
        expected_substring = 'News about Meta Platforms'

        search_result = google_search(search_query)
        self.assertTrue(expected_substring in search_result)