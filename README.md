# GeoAnalyticalService
GeoAnalyticalService is a web services created in NodeJS.

It uses Google Places API to get geographic data.

It stores the data collected from Google API and provides analytical information regarding perticular location. 

API's

1. Find Location
url: http://localhost:3000/FindPlace?placeToFind=colleges%20near%20mayur%20coloney%20pune&userId=admin@123

parameters: 
  a. placeToFind: place to find.
  b. userId: unique userId, default value is "admin@123"

Output:
  Location information in Json format.

2. Get places with text search
url: http://localhost:3000/GetPlace?place=colleges%20near%20mayur%20coloney%20pune&userId=admin@123

parameters: 
  a. GetPlace: text query to find places.
  b. userId: unique userId, default value is "admin@123"

Output:
  Location information in Json format.
  
3. Get Nearby places based on Latitude and longitude
url: http://localhost:3000/GetNearby?location=-33.8670522,151.1957362&userId=admin@123

parameters: 
  a. location: current location attributes i.e. latitude and longitude seperated by comma e.g. "location=-33.8670522,151.1957362" .
  b. userId: unique userId, default value is "admin@123"

Output:
  Location information in Json format.


