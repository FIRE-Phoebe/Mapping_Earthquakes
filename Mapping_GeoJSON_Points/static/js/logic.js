//add console.log to check if code is working
console.log('working');

//create the map obj w/ a center and zoom level. 
//let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// Create the map object with center at the San Francisco airport.
//let map = L.map('mapid').setView([37.5, -122.5], 10);

// Add GeoJSON data. FeatureCollection Obj.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);


// //add tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', 
//                     {
//                 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//                 maxZoom: 18,
//                 id: 'mapbox/outdoors-v11',
//                 tileSize: 512,
//                 zoomOffset: -1,
//                 accessToken: API_KEY

//             });
// // Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
//   pointToLayer: function(feature, latlng) {
//     console.log(feature);
//     return L.marker(latlng).bindPopup( 
//       "<h2>" + feature.properties.name + '<hr><small>' + feature.properties.city + ', ' +
//       feature.properties.country + "</small></h2>");
//   }

// }).addTo(map);

//skill drill: display the city, state, and the name of the airport.


//using onEachFeature function:
//   L.geoJSON(sanFranAirport, {
//   onEachFeature: function(feature, layer) {
//     console.log(layer);
//     layer.bindPopup("<h2>Airport Code:" + feature.properties.faa + 
//     '<hr><small>Airport Name: ' + feature.properties.name + "</small></h2>");
//    }
// }).addTo(map);
//   
//skill drill:create a popup marker for the San Francisco Airport 
//on the outdoor map. When you click on the popup, it will display 
//the airport code and name of the airport.

//map multip geojson
// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

//add tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', 
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


// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/FIRE-Phoebe/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);

// Creating a GeoJSON layer with the retrieved data.
L.geoJSON(data, {
  onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup("<h2>Airport Code: " + feature.properties.faa + 
     '<hr><small>Airport Name: ' + feature.properties.name + "</small></h2>");
    }
  }).addTo(map);

});

//skill drill: layer to add a popup marker that displays 
//all airports' codes and names 