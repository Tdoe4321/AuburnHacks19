import json
import sqlite3
import request

username = request.GET.get('username')




conn = sqlite3.connect('user.db')
c = conn.cursor()

t = (username,)
c.execute('SELECT name, address, contact_email, contact_name FROM users WHERE username =?', t)
print(c.fetchone())
