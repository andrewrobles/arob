from selenium import webdriver
from time import sleep
import configparser

browser = webdriver.Firefox()
browser.implicitly_wait(1)
browser.get('https://www.instagram.com/')

sleep(1)

username_input = browser.find_element_by_css_selector("input[name='username']")
password_input = browser.find_element_by_css_selector("input[name='password']")

config = configparser.ConfigParser()
config.read('config.ini')
username = config['instagram']['username']
password = config['instagram']['password']

username_input.send_keys(username)
password_input.send_keys(password)

login_button = browser.find_element_by_xpath("//button[@type='submit']")
login_button.click()

sleep(9999999)

browser.close()