from time import sleep
from selenium import webdriver

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

    def get_name(self, username):
        self._browser.get('{}/direct/new'.format(self._base_url))
        sleep(1)

        search_input = self._browser.find_element_by_css_selector("input[placeholder='Search...']")
        search_input.send_keys(username)
        sleep(5)