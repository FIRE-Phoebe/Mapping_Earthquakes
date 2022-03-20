//add console.log to check if code is working
console.log('working');

//create the map obj w/ a center and zoom level. 
let map = L.map('mapid').setView([40.7, -94.5], 4);

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

//adding multip points, nested in an array
// An array containing each city's location, state, and population.
let cityData = cities;
  //create for loop to iterate all the cities.
  //for (let i=0; i< cities.length; i++);
  //alternative way: use forEach() function:
//   cities.forEach(function(city){
//       console.log(city)
//       L.marker(city.location).addTo(map);
//   });
//try arrow function
cityData.forEach(city => L.marker(city.location).addTo(map));