from googleplaces import GooglePlaces, types, lang

YOUR_API_KEY = 'AIzaSyC_pk-16CSjVdRBLL9FzIMfkeP0buthiqY'
google_places = GooglePlaces(YOUR_API_KEY)

lat_lon = [lat_lon1, lat_lon_2, lat_lon_3, lat_lon_4]
current_pos = 0

lat_lon_1 = {"lat": "32.593357","lng": "-85.495163"}
lat_lon_2 = {"lat": "33.762528","lng": "-84.387866"}
lat_lon_3 = {"lat": "32.593357","lng": "-85.495163"}
lat_lon_4 = {"lat": "33.601185","lng": "-83.847952"}

# You may prefer to use the text_search API, instead.
query_result = google_places.nearby_search(
        lat_lng=lat_lon[current_pos],
        radius=100, types=[types.TYPE_HOSPITAL])

print query_result.places.name