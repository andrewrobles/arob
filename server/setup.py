import json
from django.contrib.auth.models import User

from api.models import Item

def load_data():
    file = open('menu.json', 'r')
    menu = json.load(file)
    file.close()

    if Item.objects.count() == 0:
        for item in menu:
            Item.objects.create(name=item['name'].title(), description=item['description'])

def create_superuser():
    if User.objects.count() == 0:
        username = 'andrew'
        password = '1234'
        email = 'admin@x1.app'

        user = User(
            username=username,
            email=email
        )

        user.set_password(password)
        user.is_superuser = True
        user.is_staff = True

        user.save()

load_data()
create_superuser()