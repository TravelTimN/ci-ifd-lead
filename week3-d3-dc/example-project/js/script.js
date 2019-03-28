// data used in demo: Kaggle Datasets - https://www.kaggle.com/damienbeneschi/krakow-ta-restaurans-data-raw
//---------------------------------------------------------------------------------------------------------
// DEMO ONLY - FOR EDUCATIONAL PURPOSES ONLY
// THESE FUNCTIONS ARE FOR THE MOST RECENT VERSION OF DC.JS (version 3.0+) AND D3 (version 5+)
// OLDER VERSIONS MAY USE DIFFERENT SYNTAX - SO BEWARE IF CHARTS NOT WORKING!
// use Ctrl+F ??KEYWORD?? to fined a specific section mentioned. Example: Ctrl+F ??COLORS??
// the ??RESET?? function to reset all filters simultaneously is an inline-code in the .html file
//---------------------------------------------------------------------------------------------------------

// -------------------- TABLE OF CONTENTS --------------------
// ??ARGUMENTS??
// ??COLORS??
// ??CROSSFILTER?? (crossfilter.js)
// ??DATACOUNT?? (dc.dataCount)
// ??DATATABLE?? (dc.dataTable)
// ??MAP?? (leaflet.js)
// ??PARSE???
// ??PIE?? or ??DONUT?? (dc.pieChart)
// ??REDUCER??
// ??RESET?? (dc.redrawAll)
// ??ROW?? (dc.rowChart)
// ??SCATTER?? (dc.scatterPlot)
// ??SELECT?? (dc.selectMenu)
// ??STACKED?? (dc.barChart - stacked)
// -----------------------------------------------------------





// jQuery (load scripts once page loads)
$(document).ready(function () {




    // -------------------- LOAD DATA --------------------
    // queue.js is no longer supported for newer versions of dc|d3. Instead a 'promise' is made:
    // Load file (.csv or .json) then call function to build everything

    // .csv option
    //d3.csv("data/ta-restaurants.csv").then(chartBuilder);

    // .json option [works better for utf-8 (ie: €£)]
    // great .csv to .json converter: https://www.csvjson.com/csv2json
    d3.json("../data/ta-restaurants.json").then(chartBuilder);





    // -------------------- ??COLORS?? --------------------
    // DC.js has new color schemes as of 2018: https://github.com/d3/d3-scale-chromatic
    // to set a default color scheme for all charts: (replace SCHEME with choice)
    // dc.config.defaultColors(d3.SCHEME);
    dc.config.defaultColors(d3.schemeSpectral[11]);

    // to set indivNameual color scheme by chart: (replace SCHEME with choice)
    // var myColors = d3.scaleOrdinal(d3.SCHEME); +++ .colors(myColors)





    // -------------------- READ / PARSE DATA + RENDER CHARTS --------------------
    // this is the 'promise' called after the data is loaded above
    function chartBuilder(data) {


        // -------------------- ??CROSSFILTER?? --------------------
        // applies a crossfilter so anything using variable 'ndx' will be filtered together
        var ndx = crossfilter(data);
        var allData = ndx.groupAll(); // allData groups all 'ndx' items for the ??DATACOUNT??


        // -------------------- ??DATACOUNT?? --------------------
        dc.dataCount("#total") // dc.dataCount | add to div id#total
            .crossfilter(ndx) // apply the crossfilter
            .groupAll(allData); // group allData from the crossfilter


        // -------------------- ??PARSE??? DATA --------------------
        // Loop through data and parse/convert appropriate formats
        data.forEach(function (d) {

            //----- parsing NUMBERS
            // my .csv/.json files have columns with numbers, so need to parse them
            d.Rank = parseInt(d.Rank); // column called 'Rank'
            d.Rating = parseFloat(d.Rating); // column called 'Rating'
            d.Reviews = parseInt(d.Reviews); // column called 'Reviews'

            //----- parsing DATES
            //var fullDateFormat = d3.time.format("%a, %d %b %Y %X %Z");
            //var yearFormat = d3.time.format("%Y");
            //var monthFormat = d3.time.format("%b");
            //var dayOfWeekFormat = d3.time.format("%a");
        });





        // -------------------- ??ARGUMENTS?? FOR CHART FUNCTIONS --------------------
        byCuisine(ndx, "#cuisine", "Cuisine"); // pieChart on div#cuisine from column 'Cuisine' in file
        byCity(ndx, "#city", "City"); // selectMenu on div#city from column 'City' in file
        byFood(ndx, "#food", "Cuisine"); // selectMenu on div#food from column 'Cuisine' in file
        byRating(ndx, "#rating", "Rating"); // rowChart on div#rating from column 'Rating' in file
        byStack(ndx, "#stack", "IATA"); // barChartStack on div#stack from column 'IATA' in file
        byScatter(ndx, "#scatter", "Rating") // scatterPlot on div#scatter from column 'Rating' in file
        byName(ndx, "#restaurants", "Rank"); // dataTable on div#restaurants from column 'Rank' in file

        // -------------------- RENDER CHARTS --------------------
        dc.renderAll();
    }





    // -------------------- ??PIE?? + ??DONUT?? CHARTS --------------------
    function byCuisine(ndx, divName, dimension) {
        // variables required for the chart (crossfilter, div#, column) ??ARGUMENTS??
        var pieChartCuisine = dc.pieChart(divName);
        var dim = ndx.dimension(dc.pluck(dimension));
        var group = dim.group();

        // ??COLORS?? | custom colors passed below for this chart only
        //var myColors = d3.scaleOrdinal(d3.schemeSpectral[11]);

        // ??RESET?? only this specific chart
        d3.selectAll("#resetCuisine").on("click", function () {
            pieChartCuisine.filterAll();
            dc.redrawAll();
        });

        pieChartCuisine
            .dimension(dim) // plucks the data (by Cuisine column)
            .group(group) // groups the data for this chart
            .width(250) // use carefully with .useViewBoxResizing
            .height(150) // use carefully with .useViewBoxResizing
            .useViewBoxResizing(true) // allows chart to be responsive (might need to add CSS 'width')
            .innerRadius(30) // creates ??DONUT?? effect on pie charts (disable for ??PIE?? chart)
            .externalRadiusPadding(10) // padding (but makes chart smaller)
            .externalLabels(10) // moves label text outward (otherwise in pie slice)
            .drawPaths(true) // shows line/path to labels
            .slicesCap(20) // maximum number of items to show on chart
            .minAngleForLabel(0) // from 0 to 1 (ie: 0.25) // min-size per slice to display a label
            .transitionDuration(1000) // animation speed (1000ms)
            .transitionDelay(500) // delay animation start (by 500ms)
            .title(function (d) { // hover text with info per chart item
                if (d.value === 1) { // if filtered to only '1' item
                    return d.value + " restaurant is " + d.key; // then make the text singular
                } else { // otherwise
                    return d.value + " restaurants are " + d.key; // make the text plural
                }
            })
        //.colors(myColors) // custom color scheme for this chart only
        // .legend shows a small legend or key on the chart
        //.legend(dc.legend().x(0).y(0).itemHeight(5).gap(5))
        // below function will append the amount of items filtered per option on the legend
        /*.on("pretransition", function (chart) {
            chart.selectAll(".dc-legend-item text")
                .text(function (d) {
                    return d.name + " (" + d.data + ")"; // ie: "Italian (455)"
                })
        })*/
        ;
    }





    // -------------------- ??SELECT?? MENU --------------------
    function byCity(ndx, divName, dimension) {
        // variables required for the chart (crossfilter, div#, column) ??ARGUMENTS??
        var selectMenuCity = dc.selectMenu(divName);
        var dim = ndx.dimension(dc.pluck(dimension));
        var group = dim.group();

        selectMenuCity
            .dimension(dim) // plucks the data (by City column)
            .group(group) // groups the data for this chart
            .title(function (d) {
                return d.key; // title d.key is the item plucked, to be displayed in the menu
            });
    }


    // -------------------- ??SELECT?? MENU --------------------
    function byFood(ndx, divName, dimension) {
        // variables required for the chart (crossfilter, div#, column) ??ARGUMENTS??
        var selectMenuFood = dc.selectMenu(divName);
        var dim = ndx.dimension(dc.pluck(dimension));
        var group = dim.group();

        selectMenuFood
            .dimension(dim) // plucks the data (by Cuisine column)
            .group(group) // groups the data for this chart
            .title(function (d) {
                return d.key; // title d.key is the item plucked, to be displayed in the menu
            });
    }





    // -------------------- ??ROW?? CHART --------------------
    function byRating(ndx, divName, dimension) {
        // variables required for the chart (crossfilter, div#, column) ??ARGUMENTS??
        var rowChartRating = dc.rowChart(divName);
        var dim = ndx.dimension(dc.pluck(dimension));
        var group = dim.group();

        // ??COLORS?? | custom colors passed below for this chart only
        //var myColors = d3.scaleOrdinal(d3.schemeSpectral[4]);

        // ??RESET?? only this specific chart
        d3.selectAll("#resetRating").on("click", function () {
            rowChartRating.filterAll();
            dc.redrawAll();
        });

        rowChartRating
            .dimension(dim) // plucks the data (by Rating column)
            .group(group) // groups the data for this chart
            .width(250) // use carefully with .useViewBoxResizing
            .height(150) // use carefully with .useViewBoxResizing
            .useViewBoxResizing(true) // allows chart to be responsive (might need to add CSS 'width')
            .margins({ // margins push the chart inward, like in css
                top: 10,
                right: 20,
                bottom: 40,
                left: 20
            })
            .transitionDuration(1000) // animation speed (1000ms)
            .transitionDelay(500) // delay animation start (by 500ms)
            .cap(4) // max number of rows to display
            .elasticX(true) // x-Axis becomes fluid based on filtering
            .title(function (d) { // hover text with info per chart item
                return d.value + " restaurants with " + d.key + "★ rating";
            })
            // checks d.key value and appends ★ for each star rating, and ⭑ for half-star ratings
            .label(function (d) {
                var stars = " ";
                for (star = 0; star < Math.floor(d.key); star++) {
                    stars += "★";
                }
                star = 0;
                star = star + Number.isInteger(d.key);
                if (star != true) {
                    stars += "⭑";
                }
                return d.key + stars;
            })
            .xAxis().ticks(4) // number of ticks to show on xAxis
        //.colors(myColors) // custom color variable above
        ;
    }





    // -------------------- ??STACKED?? BAR CHART --------------------
    function byStack(ndx, divName, dimension) {
        // variables required for the chart (crossfilter, div#, column) ??ARGUMENTS??
        var stackedChart = dc.barChart(divName);
        var dim = ndx.dimension(dc.pluck(dimension));

        // ??RESET?? only this specific chart
        d3.selectAll("#resetStack").on("click", function () {
            stackedChart.filterAll();
            dc.redrawAll();
        });

        // custom ??REDUCER?? to count against matched cuisine types per city
        function stackByCuisine(dimension, Cuisine) {
            return dimension.group().reduce(
                // counts towards total if a match
                function (p, v) {
                    p.total++;
                    if (v.Cuisine == Cuisine) {
                        p.match++;
                    }
                    return p;
                },
                // not-applicable for total if no match
                function (p, v) {
                    p.total--;
                    if (v.Cuisine == Cuisine) {
                        p.match--;
                    }
                    return p;
                },
                // sum of total and matched
                function () {
                    return {
                        total: 0,
                        match: 0
                    };
                }
            );
        }

        // variables storing results from custom reducer for each matched item
        // in this example, I selected the top 10 cuisine types
        var cuisineItalian = stackByCuisine(dim, "Italian");
        var cuisineEuropean = stackByCuisine(dim, "European");
        var cuisineFrench = stackByCuisine(dim, "French");
        var cuisineMediterranean = stackByCuisine(dim, "Mediterranean");
        var cuisineAmerican = stackByCuisine(dim, "American");
        var cuisineGerman = stackByCuisine(dim, "German");
        var cuisineSeafood = stackByCuisine(dim, "Seafood");
        var cuisineBar = stackByCuisine(dim, "Bar");
        var cuisineSteakhouse = stackByCuisine(dim, "Steakhouse");
        var cuisinePolish = stackByCuisine(dim, "Polish");

        stackedChart
            .dimension(dim) // plucks the data (by Rating column)
            //.width(1350) // use carefully with .useViewBoxResizing
            .height(400) // use carefully with .useViewBoxResizing
            .useViewBoxResizing(true) // allows chart to be responsive (might need to add CSS 'width')
            .gap(3) // gap between each barChart item
            .group(cuisineItalian, "Italian") // first item goes as .group
            .stack(cuisineEuropean, "European") // the rest go in as .stack (to stack on-top)
            .stack(cuisineFrench, "French") // .stack on previous
            .stack(cuisineMediterranean, "Mediterranean") // .stack on previous
            .stack(cuisineAmerican, "American") // .stack on previous
            .stack(cuisineGerman, "German") // .stack on previous
            .stack(cuisineSeafood, "Seafood") // .stack on previous
            .stack(cuisineBar, "Bar") // .stack on previous
            .stack(cuisineSteakhouse, "Steakhouse") // .stack on previous
            .stack(cuisinePolish, "Polish") // .stack on previous
            .valueAccessor(function (d) { // if number of items is greater than 0, add to the stack
                if (d.value.total > 0) {
                    return d.value.match;
                } else { // otherwise, don't add it to the stack
                    return 0;
                }
            })
            .margins({ // margins push the chart inward, like in css
                top: 10,
                right: 10,
                bottom: 40,
                left: 25
            })
            .transitionDuration(1000) // animation speed (1000ms)
            .transitionDelay(500) // delay animation start (by 500ms)
            .x(d3.scaleBand()) // essential to stacked charts!
            .xUnits(dc.units.ordinal) // essential to stacked charts!
            .elasticY(true) // y-Axis becomes fluid based on filtering
            // .legend shows a small legend or key on the chart
            .legend(dc.legend().x(50).y(0).itemHeight(20).gap(25).horizontal(true).autoItemWidth(true).itemWidth(100))
            .xAxisLabel("CITY") // label for xAxis (bottom)
            .yAxisLabel("RESTAURANTS"); // label for yAxis (left-side)
    }





    // -------------------- ??SCATTER?? PLOT --------------------
    function byScatter(ndx, divName, dimension) {
        // variables required for the chart (crossfilter, div#, column) ??ARGUMENTS??
        var scatterPlot = dc.scatterPlot(divName);
        var dim = ndx.dimension(dc.pluck(dimension));
        var dimAll = ndx.dimension(function (d) {
            return [d.Reviews, d.Rank, d.City, d.Rating]; // captures additional plucked data/columns
        });
        var group = dimAll.group();
        var minRating = dim.bottom(1)[0].Reviews; // get the smallest (.bottom) 'Review' count
        var maxRating = dim.top(1)[0].Reviews; // get the largest (.top) 'Review'count

        // ??RESET?? only this specific chart
        d3.selectAll("#resetScatter").on("click", function () {
            scatterPlot.filterAll();
            dc.redrawAll();
        });

        scatterPlot
            .dimension(dim) // plucks the data (by Rating column)
            .group(group) // groups the data for this chart
            //.width(900) // use carefully with .useViewBoxResizing
            .height(400) // use carefully with .useViewBoxResizing
            .margins({ // margins push the chart inward, like in css
                top: 10,
                right: 10,
                bottom: 40,
                left: 60
            })
            .x(d3.scaleLinear().domain([minRating, maxRating])) // adds items to chart in linear order
            .brushOn(false) // default is (true)
            .symbolSize(7) // size of the dot
            .clipPadding(10) // cuts-off overflow of dots if set to (0)
            .useViewBoxResizing(true) // allows chart to be responsive (might need to add CSS 'width')
            .transitionDuration(1000) // animation speed (1000ms)
            .transitionDelay(500) // delay animation start (by 500ms)
            .renderHorizontalGridLines(true) // show chart lines (horizontal)
            .renderVerticalGridLines(true) // show chart lines (verical)
            .xAxisLabel("REVIEWS") // label for xAxis (bottom)
            .yAxisLabel("CITY RANK") // label for yAxis (left-side)
            .title(function (d) { // hover text with info per chart item
                return "Ranked #" + d.key[1] + " in " + d.key[2] + " with " + d.key[0] + " reviews (" + d.key[3] + "★)";
            })
            .xAxis().ticks(20); // number of ticks to show on xAxis
    }





    // -------------------- ??DATATABLE?? --------------------
    function byName(ndx, divName, dimension) {
        // set required variables (chart type, dimension)
        var dataTableName = dc.dataTable(divName);
        var dim = ndx.dimension(dc.pluck(dimension));

        dataTableName
            .dimension(dim) // plucks the data (by Rank column)
            .section(function (d) { // older dc.js used .group() but now it's .section()
                return d.City; // groups each section by 'City' in this example
            })
            .columns(["Rank", "Name", "Rating", "Reviews", "Cuisine", "Price"]) // column headers
            //.showSections(false) // turns off the section titles if desired
            //.size(10) // maximum number of rows to display (ie: top 10 only)
            .size(Infinity) // allows for all rows (filtered or not) to be displayed
            .useViewBoxResizing(true) // allows chart to be responsive (might need to add CSS 'width')
            .sortBy(function (d) {
                return d.City; // sorts the sections alphabetically (Amsterdam, Athens, etc.)
            })
            .order(d3.ascending) // smallest to largest // (d3.descending) largest to smallest;
    }





    // -------------------- LEAFLET ??MAP?? --------------------
    // this example hard-codes the markers, but dc.js does allow filtering on leaflet.js maps!
    var drawMap = function () {
        // assign the map to div#map and set the initial view [lat,lng] and zoom-level
        var map = L.map("map").setView([50.870587, 14.823303], 4);
        // custom markers [lat,lng] with pop-up once clicked
        var markers = [
            L.marker([52.368, 4.9036]).bindPopup("Amsterdam"),
            L.marker([37.9838, 23.7275]).bindPopup("Athens"),
            L.marker([41.3851, 2.1734]).bindPopup("Barcelona"),
            L.marker([52.52, 13.405]).bindPopup("Berlin"),
            L.marker([48.1486, 17.1077]).bindPopup("Bratislava"),
            L.marker([50.8503, 4.3517]).bindPopup("Brussels"),
            L.marker([47.4979, 19.0402]).bindPopup("Budapest"),
            L.marker([55.6761, 12.5683]).bindPopup("Copenhagen"),
            L.marker([53.3498, -6.2603]).bindPopup("Dublin"),
            L.marker([55.9533, -3.1883]).bindPopup("Edinburgh"),
            L.marker([46.2044, 6.1432]).bindPopup("Geneva"),
            L.marker([53.5511, 9.9937]).bindPopup("Hamburg"),
            L.marker([60.1699, 24.9384]).bindPopup("Helsinki"),
            L.marker([50.0647, 19.945]).bindPopup("Krakow"),
            L.marker([38.7223, -9.1393]).bindPopup("Lisbon"),
            L.marker([46.0569, 14.5058]).bindPopup("Ljubljana"),
            L.marker([51.5074, 0.1278]).bindPopup("London"),
            L.marker([49.6116, 6.1319]).bindPopup("Luxembourg"),
            L.marker([45.764, 4.8357]).bindPopup("Lyon"),
            L.marker([40.4168, -3.7038]).bindPopup("Madrid"),
            L.marker([45.4642, 9.19]).bindPopup("Milan"),
            L.marker([48.1351, 11.582]).bindPopup("Munich"),
            L.marker([41.1579, -8.6291]).bindPopup("Oporto"),
            L.marker([59.9139, 10.7522]).bindPopup("Oslo"),
            L.marker([48.8566, 2.3522]).bindPopup("Paris"),
            L.marker([50.0755, 14.4378]).bindPopup("Prague"),
            L.marker([41.9028, 12.4964]).bindPopup("Rome"),
            L.marker([59.3293, 18.0686]).bindPopup("Stockholm"),
            L.marker([48.2082, 16.3738]).bindPopup("Vienna"),
            L.marker([52.2297, 21.0122]).bindPopup("Warsaw"),
            L.marker([47.3769, 8.5417]).bindPopup("Zurich")
        ]
        // push all markers to a group
        var cityMarkers = L.featureGroup();
        // add all markers to the map
        cityMarkers.addTo(map);
        // loop through the markers and add them to the group
        for (var i = 0; i < markers.length; i++) {
            var cityMarker = markers[i];
            cityMarker.addTo(cityMarkers);
        }
        // map tiles, attribution, and settings
        L.tileLayer(
            "https://{s}.tiles.mapbox.com/v3/mapbox.geography-class/{z}/{x}/{y}.png", {
                attribution: "&copy; Mapbox | &nbsp;", // this is an invalid attribution, used for demo only
                minZoom: 3,
                maxZoom: 8
            }).addTo(map);
    };
    // call funtion drawMap
    drawMap();





    // -------------------- CUSTOM MODAL - demo only --------------------
    // this demo doesn't use Bootstrap, so created a simple modal myself
    // MODAL (using jQuery and CSS)
    $("#results").on("click", function () {
        $("#modal").css("display", "block");
    });
    // closes the modal
    $("#close").on("click", function () {
        $("#modal").css("display", "none");
    });

});