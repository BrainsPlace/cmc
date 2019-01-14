import urllib.request, json 
import requests
from bs4 import BeautifulSoup

cbusMediaURL = 'https://www.columbus.gov/police-mediareleases/'
gitDbURL = 'https://raw.githubusercontent.com/BrainsPlace/demo/master/db.json'
homicides = []
count = -1
class Homicide:
    def __init__(self, h, d, a, u):
        self.homicide = h
        self.date = d
        self.address = a
        self.url = u

def getDB():
    with urllib.request.urlopen(gitDbURL) as url:
        return json.loads(url.read().decode())

def parseIncidents(data):
    incidents = []
    for i in data['events']:  
        incidents.append(i['incident'])
    return incidents

def parseCount(data):
    return data['overview']['sum']

def parseDateFromPublicRelease(h):
    return h[0:h.find(' ')]

def parseIncidentNumberFromPublicRelease(h):
    return h[h.rfind(' ') + 1 : -1]

def parseAddressFromPublicRelease(h):
    return  h[1 : h.rfind('\r')]

def getCbusPage():
    global count
    page = requests.get(cbusMediaURL)
    soup = BeautifulSoup(page.text, 'html.parser')
    content = soup.find_all(class_='inner-right-flow')

    for c in content:
        incident = c.contents[1]
        if "homicide" in str(incident).lower():
            
            homicide = incident.find('strong').contents[0]
            address = incident.find('span').contents[0]
            url = incident.find('a').get('href')

            h = Homicide(parseIncidentNumberFromPublicRelease(homicide),
                parseDateFromPublicRelease(homicide),
                parseAddressFromPublicRelease(address),
                'https://www.columbus.gov' + url)
            homicides.append(h)

def updateJson():
    global jsonData
    global count
    for h in homicides:
        if int(h.homicide) not in incidentList:
            count+=1
            loc = convertAddressToLongLat(h.address)
            jsonData["events"].append({
                "incident": h.homicide,
                "year": 2019,
                "date": h.date,
                "count": count,
                "address": h.address,
                "coord_x": loc[0],
                "coord_y": loc[1],
                "source": h.url})
    jsonData['overview']['sum'] = count

def convertAddressToLongLat(address):
    address = address.replace(' ', '%20')
    gUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=AIzaSyAEGGW-_erhOI1Xb4fOPQIcO7k7Hvc_ois'
    print(gUrl)
    with urllib.request.urlopen(gUrl) as url:
        res = json.loads(url.read().decode())
    _lat = res['results'][0]['geometry']['location']['lat']
    _long = res['results'][0]['geometry']['location']['lng']

    return [_lat, _long]

jsonData = getDB()
count = parseCount(jsonData)
incidentList = parseIncidents(jsonData)  #ex: [190001041, 181081371]
getCbusPage()
updateJson()
print(json.dumps(jsonData, indent=2, sort_keys=True))

print(count)