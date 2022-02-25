import unittest

from selenium import webdriver
from time import sleep

from utils import InstagramBot
import configparser

from bs4 import BeautifulSoup
from datetime import datetime
    

class TestMessaging(unittest.TestCase):

    @classmethod
    def setUpClass(self):
        config = configparser.ConfigParser()
        config.read('config.ini')

        self.username = config['instagram']['username']
        self.password = config['instagram']['password']

        self.browser = webdriver.Firefox()
        self.bot = InstagramBot(self.browser) 

        self.bot.login(self.username, self.password)

    @classmethod
    def tearDownClass(self):
        # self.browser.close() 
        pass     

    def test_send_message(self):
        message=datetime.now().__str__()
        self.bot.send_message(username='andrewroblesdev', message=message)

        self.assertTextInPage(message)

    def test_search_hashtag(self):
        hashtag = '#computerscience'
        self.bot.search_hashtag(hashtag=hashtag)

        self.assertTextInPage('Top posts')

    def test_get_hrefs(self):
        hashtag = '#computerscience'

        actual = self.bot.get_hrefs(hashtag)[0][:3]
        expected = '/p/'

        self.assertEqual(actual, expected)

    def test_get_usernames(self):
        hashtag = '#computerscience'

        actual = self.bot.get_usernames_by_hashtag(hashtag)
        expected = None

        print('actual: {}'.format(actual))

    def assertTextInPage(self, text):
        html = self.browser.page_source
        soup = BeautifulSoup(html, 'html.parser')

        actual = len(soup.findAll(text=text))
        expected = 1

        self.assertEqual(actual, expected)

if __name__ == '__main__':
    unittest.main(warnings='ignore')