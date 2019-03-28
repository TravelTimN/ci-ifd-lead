#### return [Home](https://github.com/TravelTimN/ci-ifd-lead/blob/master/README.md)

##

# IFD Week 3: `D3 | DC`

##

### **D3.js** is a JavaScript library *(created by [Mike Bostock](https://bl.ocks.org/mbostock))*

If you plan on making a data dashboard, you should consider the following steps:

- **OBTAIN DATA**
    - **[Kaggle](https://www.kaggle.com/datasets)** is great source of free data!
- **FILTER DATA** *[optional]*
    - If desired and/or permitted, remove any unnessary columns+rows from your data.
- **ASSIGN CHARTS**
    - Decide which charts your data will best portray to users. *(examples below)*
- **CONVERT DATA** *[optional]*
    - Sometimes it's easier to use **.json** versus using **.csv**
    - Suggested free online [csv to json converter](https://csvjson.com/csv2json)
- **DESIGN PROJECT**
    - This is where your artistic abilites create your dashboard wireframes!
- **< C O D E >**
    - The moment you've been waiting for - building your dashboard!

##

### **EXAMPLE DC.JS CHART TYPES**

| | | |
| --- | --- | --- |
| *barChart* | *barChart (stack)* | *chloropleth* |
| *dataCount* | *dataTable* | *donutChart* |
| *heatMap* | *lineChart* | *pieChart* |
| *rowChart* | *scatterPlot* | *selectMenu* |

*[full list of dc.js examples](https://dc-js.github.io/dc.js/examples/)*


##

### **INSPIRATION**

Still stuck for ideas and want some inspiration?

Here are a few examples of data dashboard projects from other **Code Institute** students that I thoroughly enjoyed!

- [Chris Quinn](https://github.com/10xOXR) | **[Exoplanets and how to find them](https://10xoxr.github.io/IFED_Milestone_2_Exoplanets/)**
- [Dave Laffan](https://github.com/steview-d) | **[Super Hero Dashboard](https://steview-d.github.io/superhero-dashboard/)**
- [Matt Bush](https://github.com/gitbush) | **[London Dashboard](https://gitbush.github.io/london-boroughs/)**

##

### **! IMPORTANT NOTES !**

#### UPDATED VERSIONS

**dc.js** *(version 3.0+)* and **D3** *(version 5+)* do not work with **queue.js**

Newer versions of **dc.js** and **D3** do not work with **queue.js**, which is what was displayed in the course videos. Be careful when searching for help online with problems on your project. Check which version(s) of dc.js and D3 are being used.

#### COLORS

With the newer versions, color for charts has been expanded. You can select a defaul color scheme for all charts, or select a scheme for each chart individually.

[D3 Scale Chromatic Color Schemes](https://github.com/d3/d3-scale-chromatic)

To set a default color for all charts, you could use the **schemeSpectral[11]**

`dc.config.defaultColors(d3.schemeSpectral[11]);`

This will assign a color palette with 11 options (value must be minimum of 3).

Further color options can be seen on [ColorBrewer2.org](http://www.colorbrewer2.org)

##

### **DEMO**

Now for a demo I've created using the new D3 | dc.js versions, just to highlight a few examples of charts in action.

I've uploaded the page on [GitHub](https://github.com/TravelTimN/ci-ifd-lead/blob/master/week3-d3-dc/example-project/index.html), but for now, let's check out a [LIVE DEMO on CodePen](https://codepen.io/traveltimn/full/MxxBMx)! Have fun!