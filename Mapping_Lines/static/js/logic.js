//add console.log to check if code is working
console.log('working');

//create the map obj w/ a center and zoom level. 
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

//add tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', 
                    {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: API_KEY

            });
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Coordinates for each point to be used in the line.
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790]
// ];

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//   color: "red"
// }).addTo(map);

//add two more airline stops. and let map object with a center at SFO, zoom 5.
// Coordinates for each point to be used in the polyline.
let line = [
  [33.9416, -118.4085],
  [37.6213, -122.3790],
  [40.7899, -111.9791],
  [47.4502, -122.3088]
];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
  color: "yellow"
}).addTo(map);

//add additional line that from sfo to JFK w/ two stops AUS AND YYZ
//Make the route a blue dashed line, with a weight of 4 
//and opacity of 0.5 on the light map.
//JFK [40.6413, -73.7781 ], AUS [30.1975, -97.6664], YYZ [43.6777, -79.6248]
let line2=[
  [33.9416, -118.4085],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781 ]
];


L.polyline(line2,{
  color: 'blue',
  weight:4,
  opacity: 0.5
}).addTo(map);