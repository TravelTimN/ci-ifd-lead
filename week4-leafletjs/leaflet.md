#### return [Home](https://github.com/TravelTimN/ci-ifd-lead/blob/master/README.md)

##

# IFD Week 4: `LeafletJS`

### **[LeafletJS](https://leafletjs.com/)** an open-source JavaScript library for interactive maps.

##

#### **MAP TILES**

![Map Tiles](https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Tiled_web_map_Stevage.png/300px-Tiled_web_map_Stevage.png)

Mapping on the internet is generally displayed in the form of dozens of seamless **[tiles](https://en.wikipedia.org/wiki/Tiled_web_map)**. There are several map tile providers available to the public, but some require *API Keys* in order to display tiles on your site.

Fortunately, there are several tile sources that are free to use. Thanks to [Alex Urquhart](https://github.com/alexurquhart), there's a useful tool to help find the best **[Free Tile Service](http://alexurquhart.github.io/free-tiles/)** for your next project! Not only can you find basemaps, but he provides a method of viewing overlays simultaneously. Another example is [BBBike Map Compare](https://mc.bbbike.org/mc/).

Images are served through a web server (*some examples below*), with a URL like `http:// ... /Z/X/Y.png`, where **Z** is the *zoom* level, and **X** and **Y** identify the *tiles*.

- **[ArcGIS | Esri](https://www.arcgis.com/home/group.html?id=3a890be7a4b046c7840dc4a0446c5b31#overview)**
- **[Bing maps](https://docs.microsoft.com/en-us/bingmaps/articles/bing-maps-tile-system)**
- **[CARTO](https://carto.com/location-data-services/basemaps/)**
- **[Google Maps](https://developers.google.com/maps/documentation/javascript/coordinates)**
- **[HERE](https://developer.here.com/documentation/map-tile/topics/resource-base-maptile.html)**
- **[OpenStreetMap](https://wiki.openstreetmap.org/wiki/Tiles)**

##

### **ATTRIBUTION**

Whichever map tile provider you decide to use, proper **Attribution** is *mandatory*! If you are using multiple map tile providers, you must supply proper attribution for each layer. Some examples of attribution are below, but be sure to double-check for updated attribution details per vendor.

##### *example of multiple map tile attributions*
![Attribution Example](https://github.com/TravelTimN/ci-ifd-lead/blob/master/week4-leafletjs/example-project/img/attribution.png)

*NOTE*: Some map tile providers are starting to embed attribution automatically. By default, *Leaflet* attribution is built-in, and with certain plugins like the *Esri Geosearch control*.

| Map Provider | Example *Attribution* |
| --- | --- |
| **[ArcGIS - Esri](https://developers.arcgis.com/terms/attribution/)** | *Powered by Esri* |
| **[Bing maps](https://www.microsoft.com/en-us/maps/mobile-brand-guidelines)** | *© Microsoft Corporation Earthstar Geographics SIO* |
| **[CARTO](https://carto.com/attribution/)** | *© CARTO* |
| **[Google Maps](https://www.google.com/permissions/geoguidelines/attr-guide/)** | *Map data © Google* |
| **[HERE](https://openlayers.org/en/latest/examples/here-maps.html)** | *Map Tiles © HERE* |
| **[OpenStreetMap](https://www.openstreetmap.org/copyright)** | *© OpenStreetMap contributors* |

##

### **COORDINATES**

If you aren't using a dataset with pre-determined latitude/longitude coordinates, then the easiest way to find coordinates is to use **[Google Maps](https://www.google.com/maps)**. Find a specific place, *right-click* and select `What's here?`. It'll bring a pop-up at the bottom of the page with details about where you've clicked, along with the coordinates.

![Example Coordinates on Google Maps](https://github.com/TravelTimN/ci-ifd-lead/blob/master/week4-leafletjs/example-project/img/latlng.png)

You can copy/paste from the pop-up, or click directly on the link to get the coordinates larger on screen. Be careful copying any coordinates from the pop-up at the bottom, and remove any blank spaces that may have accidentally been copied from Google.

##

### **BASIC MAP**

Believe it or not, you can have your own map with as little as a few lines of code!
For demo purposes, I'm going to use the **World Street Map** provided by *ArcGIS | Esri*. This example uses the LeafletJS CDN for version 1.4.0 which is the current version at the time of this build (April 2019).

**HTML**
```html
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css" type="text/css">
<div id="map"></div>
<script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"></script>
```

**CSS**
```css
#map {
    height: 500px;
}
```

**JS**
```js
var mapTileLayers = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}", {
    attribution: "Powered by <a href='https://developers.arcgis.com/terms/attribution/' target='_blank' rel='noopener'>Esri</a>"
});

var map = L.map("map", {
    layers: [mapTileLayers],
    center: [23.5, 12],
    zoom: 2
});
```

Et voila! That's it! You've got a simple map of Earth!

##

### **MAP OVERLAY**

If adding a map **overlay**, it must come *after* the map settings above in your JavaScript file.

```js
var mapOverlay = L.tileLayer("http://services.arcgisonline.com/arcgis/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}");
mapOverlay.bringToFront().addTo(map).setZIndex(9);
```

Note that it's setting `.bringToFront()` and `.setZIndex(9)` so it sits on top of the basemap layer.

##

### **MARKERS**

You can add a simple **marker** with the following code:

```js
var myMarker = L.marker([-22.951993, -43.210439]).addTo(map);
```

That will add a basic marker on *Christ the Redeemer* in Rio de Janeiro.

If you'd like to add a few additional items to the marker for user-interaction, just append them to the same line, immediately after `.addTo(map)`

- `.bindPopup("Christ the Redeemer")` // pop-up with text once clicked
- `.bindTooltip("Rio de Janeiro")` // tooltip with text on hover
- `.openPopup()` // sets the pop-up to be automatically opened when the map loads

##

### **CUSTOM MARKERS**

You can have the marker be whatever image you'd like with a few extra lines of code!

```js
var rioIcon = new L.Icon({
    iconUrl: "img/rio.png", // image location in your directory
    iconSize: [50, 50], // image size (width: 50px; height: 50px;)
    iconAnchor: [25, 50] // sets location of marker respective to LatLng coordinates [X, Y]
});
rioMarker.setIcon(rioIcon); // append custom icon to marker
```

##

### **CIRCLES**

Drawing a **circle** radius on your map is simple, with a few optional properties listed below.

```js
var myCircle = L.circle([53.349807, -6.260255], { // LatLng of circle (Dublin Spire)
        color: "#000", // stroke color
        opacity: 0.5, // opacity from 0-1
        fillColor: "#0f0", // fill color
        fillOpacity: 0.5, // fill opacity
        radius: 50 // radius of circle
    }).addTo(map).bindPopup("Dublin Spire").bindTooltip("Dublin"); // append with pop-up and tooltip
```

##

### **POLYLINES**

A **polyline** is a straight line from one coordinate to another.

Note: It will not bend or arc as it would normally do on a sphere. Actual physical straight line on screen.

```js
var myPolyline = L.polyline([
    [-22.951993, -43.210439], // starting coordinates of polyline (Rio)
    [40.676698, 117.241585] // ending coordinates of polyline (Beijing)
], {
    color: "red", // color can be #HEX, name, RGB(A), etc.
    weight: 5, // stroke or width of line
    opacity: 1 // opacity of line
}).addTo(map).bindPopup("<b>Christ the Redeemer<br>- to -<br>Great Wall of China</b>").bindTooltip("Rio to Beijing");
```

##

## **POLYGONS**

**Polygons** are multi-sided shapes that take several coordinates to render.

My sincere apologies to the Kazakh nation for this crappy rendition of their wonderful country, which I had the pleasure of visiting in 2017!

```js
var kazakhPoly = L.polygon([
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
]).addTo(map).bindPopup("Kazakhstan").bindTooltip("Kazakhstan");
```

