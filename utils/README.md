### How to set up Instabot for local development
- Download Firefox webdriver https://github.com/mozilla/geckodriver/releases 
- Unzip `geckodriver` to root directory
- Add driver to path `export PATH=$PATH:/YourDirectory`
- Rename `config.ini.sample` to `config.sample`
- Replace `USERNAMEGOESHERE` and `PASSWORDGOESHERE` in `config.sample`
- Create virtual environment `python3 -m venv venv`
- Activate virtual environment `source venv/bin/activate`
- Install required packages `pip install -r requirements.txt`
- Verify tests run without failure `python3 test.py`

### Questions, comments, or concerns?
I'm best reachable by email `andrewrobles@berkeley.edu`
