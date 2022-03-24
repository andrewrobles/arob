import json, yaml

yml_file = open('menu.yml', 'r')
raw_yml_data = yml_file.read()
yml_file.close()

menu_dict = yaml.load(raw_yml_data)
json_file = open('menu.json', 'w')
json.dump(menu_dict, json_file)
json_file.close()

