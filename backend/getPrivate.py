import json
import sqlite3
conn = sqlite3.connect('example.db')

a = {'name':'Sarah', 'age': 24, 'isEmployed': True }
# a python dictionary
def retjson():
    python2json = json.dumps(a)
    print(python2json)

retjson()