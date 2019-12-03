// Create web map object
const map = new L.map('map',{
    center: [42.375467, -71.112863],
    zoom: 14,
    minZoom: 13,
    maxZoom: 18
});

// Add tile layer for Open Street Map to map object
let Stamen_TonerLite = L.tileLayer('your_url', {
    minZoom: 13,
    maxZoom: 18
}).addTo(map);

fetch("obs_bike_lanes.geojson")
.then(function(response){return response.json()})
.then(function(data){
    // add GeoJSON layer to the map once the file is loaded
    let closedBlockedLanes = L.geoJson(data,{
        attribution: 'Obstructed lane data provided by <a href="https://data.cambridgema.gov/Public-Works/Commonwealth-Connect-Service-Requests/2z9k-mv9g">Cambridge Open Data</a>',
        pointToLayer: function(geoJsonPoint, latlng) {
            return L.circleMarker(latlng, {
                color: 'gray',
                weight: 1,
                radius: 7
            });
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.created + "<br>" + feature.properties.address);
        },
        filter: function (feature, layer) {
            return feature.properties.ticket_status == "closed";
        }
    });

    let openBlockedLanes = L.geoJson(data,{
        attribution: 'Obstructed lane data provided by <a href="https://data.cambridgema.gov/Public-Works/Commonwealth-Connect-Service-Requests/2z9k-mv9g">Cambridge Open Data</a>',
        pointToLayer: function(geoJsonPoint, latlng) {
            return L.circleMarker(latlng, {
                color: 'red',
                weight: 1,
                radius: 7
            });
        },
        onEachFeature: function (feature, layer) {
            layer.bindPopup(feature.properties.created + "<br>" + feature.properties.address);
        },
        filter: function (feature, layer) {
            return feature.properties.ticket_status == "open";
        }
    }).addTo(map);

    let allBlockedLanes = L.layerGroup([closedBlockedLanes, openBlockedLanes]);

    L.control.layers({
        "All obstructed bike lane reports": allBlockedLanes, 
        "Closed obstructed bike lane reports": closedBlockedLanes, 
        "Open obstructed bike lane reports": openBlockedLanes,
    }, {
    }, {
        collapsed: false
    }).addTo(map);
});