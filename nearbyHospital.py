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


gmaps = googlemaps.Client(key='AIzaSyC_pk-16CSjVdRBLL9FzIMfkeP0buthiqY')
mylat = (gmaps.geolocate()['location']['lat'])
mylon = (gmaps.geolocate()['location']['lng'])

YOUR_API_KEY = 'AIzaSyC_pk-16CSjVdRBLL9FzIMfkeP0buthiqY'
google_places = GooglePlaces(YOUR_API_KEY)

lat_lon_1 = {'lat': mylat, 'lng': mylon}
lat_lon_2 = {'lat': '33.762528', 'lng': '-84.387866'}
lat_lon_3 = {'lat': mylat, 'lng': mylon}
lat_lon_4 = {'lat': '33.601185', 'lng': '-83.847952'}

#current_pos = 0
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
	execfile("testSpeech.py")
	mixer.init()
	mixer.music.load("audio/0.mp3")
	mixer.music.play()

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
	        	execfile("sendEmail.py")
	        else:
	        	print "No Hospitals Nearby"



if __name__ == '__main__':
    main()