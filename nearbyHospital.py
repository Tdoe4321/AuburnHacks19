#!/usr/bin/python
# -*- coding: utf-8 -*-

from googleplaces import GooglePlaces, types, lang
import sys
import termios
import tty
import os
import time
import requests, googlemaps
from pygame import mixer
from datetime import datetime
from time import gmtime, strftime
import smtplib
from email.MIMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText
import json
import shutil
import smtplib
from os.path import basename
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.utils import COMMASPACE, formatdate
from gtts import gTTS



gmaps = googlemaps.Client(key='AIzaSyC_pk-16CSjVdRBLL9FzIMfkeP0buthiqY')
mylat = (gmaps.geolocate()['location']['lat'])
mylon = (gmaps.geolocate()['location']['lng'])

YOUR_API_KEY = 'AIzaSyC_pk-16CSjVdRBLL9FzIMfkeP0buthiqY'
google_places = GooglePlaces(YOUR_API_KEY)

lat_lon_1 = {'lat': str(mylat), 'lng': str(mylon)}
lat_lon_2 = {'lat': '33.762528', 'lng': '-84.387866'}
lat_lon_3 = {'lat': str(mylat), 'lng': str(mylon)}
lat_lon_4 = {'lat': '32.640155', 'lng': '-85.403747'}

reciepient_lat_lon = {'lat':'32.601949', 'lng':'-85.487686' }

lat_lon = [lat_lon_1, lat_lon_2, lat_lon_3, lat_lon_4]

button_delay = 0.2

query_result = None


def getch():
    fd = sys.stdin.fileno()
    old_settings = termios.tcgetattr(fd)
    try:
        tty.setraw(sys.stdin.fileno())
        ch = sys.stdin.read(1)
    finally:

        termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
    return ch


def playAudio():
	textToSpeech()
	mixer.init()
	mixer.music.load("audio/0.mp3")
	mixer.music.play()

def sendEmail(hospitalName, road, routeTime):
	#currTime = strftime("%Y-%m-%d %H:%M:%S", gmtime())

	url = 'https://maps.googleapis.com/maps/api/streetview?size=600x300&location=' + hospitalName + '&key=AIzaSyC_pk-16CSjVdRBLL9FzIMfkeP0buthiqY'
	response = requests.get(url, stream=True)
	with open('img.jpeg', 'wb') as out_file:
		shutil.copyfileobj(response.raw, out_file)
	del response

	f = "img.jpeg"
	with open(f, "rb") as fil:
		part = MIMEApplication(fil.read(),Name=basename(f))

	part['Content-Disposition'] = 'attachment; filename="%s"' % basename(f)

	currTime = time.ctime()

	file = open("pass.txt", "r") 
	data = file.readlines()
	passw = data[0]
	fromemail = data[1]
	toemail = data[2]

	msg = MIMEMultipart()
	msg['Subject'] = "ALERT! Tyler is in the hospital"
	msg['From'] = fromemail
	msg['To'] = toemail
	msg.attach(part)
 
	body = "Tyler has entered the hospital at " + currTime + " and has not silenced his alert notification.\nHe is at " + hospitalName + ", take " + road + ". It will take roughly " + routeTime + " to get there."
	msg.attach(MIMEText(body, 'plain'))
 
	server = smtplib.SMTP('smtp.gmail.com', 587)
	server.starttls()
	server.login(fromemail, passw)
	text = msg.as_string()
	server.sendmail(fromemail, toemail, text)
	server.quit()

def textToSpeech():
	name = "Tyler"
	allergies = ["omnicef", "zithromax", "Insulin"]

	sentence = "WARNING! WARNING! " + name + " has the following allergies:"

	for allergin in allergies:
		sentence = sentence + allergin + ", "

	number = 0

	tts = gTTS(sentence)
	path = "audio/" + str(number) + '.mp3'
	tts.save(path)

current_milli_time = lambda : int(round(time.time() * 1000))

start_time = current_milli_time()

this_loop_time = start_time

def main():
	current_pos = 0

	while True:
	    char = getch()

	    if char == 'q':
	        print 'Stop!'
	        exit(0)

	    if char == 'n':
	        print 'Next Location'
	        time.sleep(button_delay)
	        if (current_pos == (len(lat_lon) - 1)):
	        	current_pos = 0
	        else:
	        	current_pos += 1

	    elif char == 'b':
	        print 'Previous Location'
	        time.sleep(button_delay)
	        if (current_pos == 0):
	        	current_pos = len(lat_lon) - 1
	        else:
	        	current_pos -= 1

	    elif char == 'p':
	    	print 'Pinging Google'
	    	query_result = google_places.nearby_search(lat_lng=lat_lon[current_pos],radius=100,types=[types.TYPE_HOSPITAL])
	        if len(query_result.places) > 0:
	        	print "Hospital Nearby: " + query_result.places[0].name
	        	playAudio()
	        	now = datetime.now()
	        	directions_result = gmaps.directions(reciepient_lat_lon["lat"] + "," + reciepient_lat_lon["lng"] ,
                                     	 query_result.places[0].name,
                                     	  mode="driving")
	        	sendEmail(query_result.places[0].name, directions_result[0]["summary"], directions_result[0]["legs"][0]["duration"]["text"])
	        else:
	        	print "No Hospitals Nearby"



if __name__ == '__main__':
    main()