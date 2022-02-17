import unittest

from selenium import webdriver
from time import sleep

from core import InstagramBot
import configparser

from bs4 import BeautifulSoup

class TestSendMessage(unittest.TestCase):

    @classmethod
    def setUpClass(self):
        config = configparser.ConfigParser()
        config.read('config.ini')

        self.username = config['instagram']['username']
        self.password = config['instagram']['password']

        self.browser = webdriver.Firefox()
        self.bot = InstagramBot(self.browser) 

    @classmethod
    def tearDownClass(self):
        self.browser.close()      

    def test_is_logged_in(self):
        self.bot.login(self.username, self.password)

        html = self.browser.page_source
        soup = BeautifulSoup(html, 'html.parser')

        actual = len(soup.findAll('html', {'class':'logged-in'}))
        expected = 1

        self.assertEqual(actual, expected)

    def test_search_username(self):
        self.bot.get_name('andrewroblesdev')
    
        html = self.browser.page_source
        soup = BeautifulSoup(html, 'html.parser')

        actual = len(soup.findAll(text='Andrew Robles'))
        expected = 1

        self.assertEqual(actual, expected)

if __name__ == '__main__':
    unittest.main(warnings='ignore')