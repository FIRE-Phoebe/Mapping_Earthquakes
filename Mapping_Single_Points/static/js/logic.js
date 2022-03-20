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

//add a market to the Map,add LA in CA,zoom as 14.
let marker = L.marker([34.0522, -118.2437],14).addTo(map);

//add a circle to the map, LA,CA
let circle = L.circle([34.0522, -118.2437],
    {
        radius: 100
    }).addTo(map);
//skill drill
L.circleMarker([34.0522, -118.2437],{
    radius:300,
    color: 'balck',
    fillColor:'#ffffa1'
}).addTo(map);

//change the style of map.
//https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/