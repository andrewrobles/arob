from time import sleep
from selenium import webdriver

class InstagramBot:
    def __init__(self, browser):
        self._browser = browser
        self._browser.implicitly_wait(1)
        self._browser.get('https://www.instagram.com/')
        sleep(1)

    def login(self, username, password):
        username_input = self._browser.find_element_by_css_selector("input[name='username']")
        password_input = self._browser.find_element_by_css_selector("input[name='password']")

        username_input.send_keys(username)
        password_input.send_keys(password)

        login_button = self._browser.find_element_by_xpath("//button[@type='submit']")
        login_button.click()
        sleep(5)