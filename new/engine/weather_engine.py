import sys

import requests

from bs4 import BeautifulSoup as bs

from models import Weather, Base, engine, db_session

city = sys.argv[1]
print('getting city', city)

def get_weather(place):
    place = place.replace(" ", "-")
    url = "https://www.weather-forecast.com/locations/" + place + "/forecasts/latest"
    r = requests.get(url)
    soup = bs(r.content, "lxml")
    weather = soup.findAll("span", {"class": "phrase"})[0].text
    w = Weather(city=place, response=weather)
    db_session.add(w)
    db_session.commit()
    return weather

print(get_weather(city))
sys.stdout.flush()

def init_db():
    # import all modules here that might define models so that
    # they will be registered properly on the metadata.  Otherwise
    # you will have to import them first before calling init_db()
    Base.metadata.create_all(bind=engine)

init_db()