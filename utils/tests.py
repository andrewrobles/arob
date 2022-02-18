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

        html = self.browser.page_source
        soup = BeautifulSoup(html, 'html.parser')

        actual = len(soup.findAll(text=message))
        expected = 1

        self.assertEqual(actual, expected)

"""
h2 contains Turn on Notifications
button contains Turn On 
button contains Not Now
"""

if __name__ == '__main__':
    unittest.main(warnings='ignore')