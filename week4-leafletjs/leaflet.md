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