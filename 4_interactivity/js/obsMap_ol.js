const map = new ol.Map({
    target: 'map',
    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        })
    ],
    view: new ol.View({
        center: ol.proj.fromLonLat([-71.112863, 42.375467   ]),
        zoom: 14
    })
});

$.getJSON("obs_bike_lanes.geojson", function(data){
    var featureOverlay = new ol.layer.VectorLayer({
        source: new ol.source.Vector.VectorSource({
            url: data,
            format: new ol.format.GeoJSON()
        }),
        map: map,
        // style: function(feature) {
        //     highlightStyle.getText().setText(feature.get('name'));
        //     return highlightStyle;
        // }
    });
})