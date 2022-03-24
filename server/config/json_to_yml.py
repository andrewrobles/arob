import json, yaml

file = open('menu.json', 'r')
data = file.read()
file.close()

data = json.loads(data)

file = open('menu.yml', 'w')
yaml.dump(data, file)
file.close()