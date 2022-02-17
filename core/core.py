from time import sleep
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

from icecream import ic

class InstagramBot:
    def __init__(self, browser):
        self._browser = browser
        self._browser.implicitly_wait(1)
        self._base_url = 'https://www.instagram.com'
        self._browser.get(self._base_url)
        sleep(1)

    def login(self, username, password):
        username_input = self._browser.find_element_by_css_selector("input[name='username']")
        password_input = self._browser.find_element_by_css_selector("input[name='password']")

        username_input.send_keys(username)
        password_input.send_keys(password)

        login_button = self._browser.find_element_by_xpath("//button[@type='submit']")
        login_button.click()
        sleep(5)

    def search_username(self, username):
        self._browser.get('{}/direct/new'.format(self._base_url))
        sleep(1)

        search_input = self._browser.find_element_by_css_selector("input[placeholder='Search...']")
        search_input.send_keys(username)
        sleep(1)

    def send_message(self, username, message):
        print('SEND_MESSAGE()')
        self.search_username(username)

        elements = self._find_elements_by_text(username)
        ic(elements)
        search_result = elements[-1]
        search_result.click()
        sleep(1)

        next_button = self._browser.find_element_by_xpath("//*[text()='{}']".format('Next'))
        next_button.click()
        sleep(5)

        message_input = self._browser.find_element_by_css_selector("textarea[placeholder='Message...']")
        message_input.send_keys(message)
        message_input.send_keys(Keys.ENTER)
        sleep(1)    
        print('============================')   

    def _find_element_by_text(self, text):
        return self._browser.find_element_by_xpath("//*[text()='{}']".format(text)) 

    def _find_elements_by_text(self, text):
        return self._browser.find_elements_by_xpath("//*[text()='{}']".format(text))