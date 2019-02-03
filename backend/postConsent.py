import json
import sqlite3
import request

username = request.POST.get('username')




conn = sqlite3.connect('user.db')
c = conn.cursor()

t = (username,)
c.execute('INSERT INTO users (username) VALUES (?)', t)
print(c.fetchone())
