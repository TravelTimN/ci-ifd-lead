//----------------------------------------------------------- LOAD DOCUMENT (jQuery)
$(document).ready(function () {



    //-----------------------------------------------------------  MAP
    //----- MAP TILES
    var mapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
        //attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
        // ATTRIBUTION IS MANDATORY! My code is disabled because it's being added automatically by Esri Geosearch Control plugin below.
    });



    //----- INITIAL MAP SETTINGS (most of these are optional!)
    var map = L.map("map", { // "map" is the #div where to build the map in html
        layers: [mapTileLayers], // variable from above
        center: [23.5, 12], // central lat-lng once loaded
        zoom: 2, // smaller numbers = zoomOut // larger numbers = zoomIn
        minZoom: 2, // max zoomOut permitted
        maxZoom: 18, // max zoomIn permitted
        maxBounds: [ // stops map from infinite scrolling at edges
            [-75, -190],
            [90, 190]
        ],
        maxBoundsViscosity: 0.5, // elastic bounce-back of map edges
    });




    //----------------------------------------------------------- OVERLAY
    // !! must be added after the initial map setup !!
    //var mapOverlay = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}");
    //mapOverlay.bringToFront().addTo(map).setZIndex(9);




    //----------------------------------------------------------- SEARCH
    // Esri Geosearch control: https://esri.github.io/esri-leaflet/api-reference/controls/geosearch.html
    var searchControl = L.esri.Geocoding.geosearch().addTo(map);
    var results = L.layerGroup().addTo(map);

    searchControl.on("results", function (data) {
        for (var i = data.results.length - 1; i >= 0; i--) {
            results.addLayer(L.marker(data.results[i].latlng).bindPopup(data.results[0].text).bindTooltip(data.results[0].text));

            // zooms out if too far zoomed-in, so the search works globally again
            // otherwise if too zoomed-in, it will search only in current view on screen
            // start: (function by Tim Nelson)
            $(".geocoder-control-input").on("click", function () {
                currentZoom = map.getZoom();
                if (currentZoom > 7) {
                    newZoom = 7;
                    currentBounds = map.getBounds();
                    centLat = (Math.floor(currentBounds._northEast.lat) + Math.floor(currentBounds._southWest.lat)) / 2;
                    centLng = (Math.floor(currentBounds._northEast.lng) + Math.floor(currentBounds._southWest.lng)) / 2;
                    map.flyTo([centLat, centLng], newZoom);
                } else {
                    newZoom = map.getZoom();
                }
                results.clearLayers();
            }); // end: (function by Tim Nelson)
        }
    });




    //----------------------------------------------------------- SCALE
    // adds scale/legend in bottom-left corner of map
    L.control.scale().addTo(map);




    //----------------------------------------------------------- MARKERS + CUSTOM ICONS
    // set variable with Latitute and Longitude, plus any options bindings
    var rioMarker = L.marker([-22.951993, -43.210439]).addTo(map).bindPopup("Christ the Redeemer").bindTooltip("Rio de Janeiro") /*.openPopup()*/ ;
    // set custom icon per marker
    var rioIcon = new L.Icon({
        iconUrl: "img/rio.png", // image location
        iconSize: [50, 50], // image size (width: 50px; height: 50px;)
        iconAnchor: [25, 50] // sets location of marker respective to LatLng coordinates [X, Y]
    });
    rioMarker.setIcon(rioIcon); // append custom icon to marker

    var beijingMarker = L.marker([40.676698, 117.241585]).addTo(map).bindPopup("Great Wall of China").bindTooltip("Beijing") /*.openPopup()*/ ;
    var beijingIcon = new L.Icon({
        iconUrl: "img/beijing.png",
        iconSize: [50, 50],
        iconAnchor: [25, 50]
    });
    beijingMarker.setIcon(beijingIcon);

    var cairoMarker = L.marker([29.979213, 31.134357]).addTo(map).bindPopup("Pyramids of Giza").bindTooltip("Cairo") /*.openPopup()*/ ;
    var cairoIcon = new L.Icon({
        iconUrl: "img/cairo.png",
        iconSize: [50, 50],
        iconAnchor: [25, 50]
    });
    cairoMarker.setIcon(cairoIcon);

    var parisMarker = L.marker([48.858314, 2.294546]).addTo(map).bindPopup("Eiffel Tower").bindTooltip("Paris") /*.openPopup()*/ ;
    var parisIcon = new L.Icon({
        iconUrl: "img/paris.png",
        iconSize: [50, 50],
        iconAnchor: [25, 50]
    });
    parisMarker.setIcon(parisIcon);

    var desertMarker = L.marker([36.990464, -110.095567]).addTo(map).bindPopup("Monument Valley").bindTooltip("Arizona") /*.openPopup()*/ ;
    var desertIcon = new L.Icon({
        iconUrl: "img/desert.png",
        iconSize: [50, 50],
        iconAnchor: [25, 50]
    });
    desertMarker.setIcon(desertIcon);

    var easterMarker = L.marker([-27.125710, -109.276806]).addTo(map).bindPopup("Hanga Roa").bindTooltip("Easter Island") /*.openPopup()*/ ;
    var easterIcon = new L.Icon({
        iconUrl: "img/easter.png",
        iconSize: [50, 50],
        iconAnchor: [25, 50]
    });
    easterMarker.setIcon(easterIcon);

    var sydneyMarker = L.marker([-33.856963, 151.215136]).addTo(map).bindPopup("Syndey Opera House").bindTooltip("Sydney") /*.openPopup()*/ ;
    var sydneyIcon = new L.Icon({
        iconUrl: "img/sydney.png",
        iconSize: [50, 50],
        iconAnchor: [25, 50]
    });
    sydneyMarker.setIcon(sydneyIcon);

    var penguinMarker = L.marker([-69.512083, -65.713293]).addTo(map).bindPopup("Here be Penguins!").bindTooltip("Antarctica") /*.openPopup()*/ ;
    var penguinIcon = new L.Icon({
        iconUrl: "img/penguin.png",
        iconSize: [50, 50],
        iconAnchor: [25, 50]
    });
    penguinMarker.setIcon(penguinIcon);

    var okavangoMarker = L.marker([-19.649958, 22.905784]).addTo(map).bindPopup("Okavango Delta").bindTooltip("Botswana") /*.openPopup()*/ ;
    var okavangoIcon = new L.Icon({
        iconUrl: "img/okavango.png",
        iconSize: [50, 50],
        iconAnchor: [25, 50]
    });
    okavangoMarker.setIcon(okavangoIcon);

    var polarMarker = L.marker([78.235721, 15.491337]).addTo(map).bindPopup("Here be Polar Bears!").bindTooltip("Svalbard") /*.openPopup()*/ ;
    var polarIcon = new L.Icon({
        iconUrl: "img/polar.png",
        iconSize: [50, 50],
        iconAnchor: [25, 50]
    });
    polarMarker.setIcon(polarIcon);




    //----------------------------------------------------------- CIRCLES
    // creates circles on the map
    // the following are for display purposes to show the "maxBounds" locations on this particular map
    var swBound = L.circle([-75, -190], { // LatLng of circle
        color: "#000", // stroke color! not fill-color
        opacity: 0.5, // opacity from 0-1
        fillColor: "#f00", // fill-color
        fillOpacity: 0.5, // fill-opacity
        radius: 400000 // radius of circle (extra-large for demo purposes only!)
    }).addTo(map).bindPopup("Bottom-Left Bound"); // append circle to "map" #div.

    var neBound = L.circle([80, 185], {
        color: "#000",
        opacity: 0.5,
        fillColor: "#f00",
        fillOpacity: 0.5,
        radius: 200000
    }).addTo(map).bindPopup("Top-Right Bound");

    var myCircle = L.circle([53.349807, -6.260255], { // LatLng of circle (Dublin Spire)
        color: "#000", // stroke color
        opacity: 0.5, // opacity from 0-1
        fillColor: "#0f0", // fill color
        fillOpacity: 0.5, // fill opacity
        radius: 50 // radius of circle
    }).addTo(map).bindPopup("Dublin Spire").bindTooltip("Dublin"); // append circle to "map" #div with pop-up




    //----------------------------------------------------------- POLYLINES
    // single, straigt lines from one coordinate to another
    var myPolyline = L.polyline([
        [-22.951993, -43.210439], // starting coordinates of polyline (Rio)
        [40.676698, 117.241585] // ending coordinates of polyline (Beijing)
    ], {
        color: "red", // color can be #HEX, name, RGB(A), etc.
        weight: 5, // stroke or width of line
        opacity: 1 // opacity of line
    }).addTo(map).bindPopup("<b>Christ the Redeemer<br>- to -<br>Great Wall of China</b>").bindTooltip("Rio to Beijing [POLYLINE]");
    // append polyline to "map" #div and include pop-up and hover text.




    //----------------------------------------------------------- POLYGONS
    // custom shapes, not a single line, but an actual shape
    // the example below is a "rough" outline of the country *Kazakhstan*
    // (apologies to the Kazakh nation for creating new fake borders with neighbors!)
    var myPolygon = L.polygon([
        [41.791686, 52.532313],
        [44.613073, 50.300030],
        [45.962637, 53.090383],
        [47.042953, 52.462554],
        [46.228697, 49.567562],
        [49.276056, 46.533053],
        [51.780782, 51.032498],
        [51.216236, 59.717473],
        [54.072007, 61.356805],
        [55.321612, 70.425454],
        [53.869636, 73.317153],
        [54.304194, 76.736554],
        [50.953315, 79.947535],
        [50.986721, 83.119436],
        [49.184949, 87.481489],
        [47.220813, 85.740977],
        [47.220813, 83.005456],
        [45.330319, 82.264586],
        [45.008892, 79.871005],
        [42.283878, 80.191691],
        [43.272062, 74.235027],
        [40.716621, 68.437327],
        [43.655295, 65.110162],
        [43.564289, 61.955585],
        [45.597759, 58.496693],
        [45.046214, 56.011634],
        [41.321885, 55.497063],
        [42.403493, 54.075143]
    ]).addTo(map).bindPopup("Kazakhstan").bindTooltip("Kazakhstan [POLYGON]");
    // append the polygon with optional pop-up and hover text





    //----------------------------------------------------------- POPUP ON CLICK
    // this function will show a pop-up with the exact LatLng coordinates where the user clicks
    var popupClick = L.popup();

    function onMapClick(e) {
        popupClick
            .setLatLng(e.latlng)
            .setContent("latitude: <b>" + e.latlng.lat.toFixed(5) + "</b><br>longitude: <b>" + e.latlng.lng.toFixed(5) + "</b>")
            .openOn(map);
    }
    map.on('click', onMapClick); // append pop-up to popupClick variable


});