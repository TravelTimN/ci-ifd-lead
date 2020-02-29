#### return [Home](https://github.com/TravelTimN/ci-ifd-lead/blob/master/README.md)

##

# IFD Week 2: `jQuery`

### **jQuery** is a JavaScript library

##

#### JavaScript engines by browser ([further reading](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines))
| BROWSER | JS ENGINE |
| --- | --- |
| **Chrome** | *V8* |
| **Firefox** | *Spider Monkey* |
| **Safari** | *Nitro* |
| **Edge** | *Chakra* |
| **Internet Explorer** | *Chakra* |

##

#### **Terminology**
| TERM | DESCRIPTION |
| --- | --- |
| **DOM** | "**D**ocument **O**bject **M**odel" |
| | *(The DOM is an API, not a library)* |
| **API** | "**A**pplication **P**rogramming **I**nterface" |
| | *(Intermediary software allowing applications to work together)* |
| **WHATWG** | "**W**eb **H**ypertext **A**pplication **T**echnology **W**orking **G**roup" |
| | *(Maintains the DOM standard for all browsers)* |

##

#### **Add jQuery to any website** (*temporarily*)
Add the following 3 lines of code into the *'Console'* within **Chrome's DevTools** on a website of your choice:
~~~~js
var script = document.createElement("script");
script.src = "//code.jquery.com/jquery-latest.min.js";
document.head.appendChild(script);
~~~~

##

#### **jQuery** - local download
> go to [jQuery Download](https://jquery.com/download/) page
#### **jQuery** - CDN
> go to [jQuery CDN](https://code.jquery.com/) page

##

#### Load jQuery only once page is fully ready:
~~~~js
$(document).ready(function() {
    // your code here
});
~~~~

##
##

## **SELECTING ELEMENTS USING JQUERY**

### Select a specific HTML element:
| jQuery | Outcome |
| --- | --- |
| `$("a");` | all **&lt;a&gt;** elements |
| `$("img");` | all **&lt;img&gt;** elements |
| `$("div");` | all **&lt;div&gt;** elements |
| `$(":header");` | all **&lt;h#&gt;** elements (**&lt;h1&gt;** **&lt;h2&gt;** **&lt;h3&gt;** etc.) |

##

### Select an element using its `#id` name:
| jQuery | Outcome |
| --- | --- |
| `$("#jumbotron");` | only the element with **id="jumbotron"** |

##

### Select an element using its `.class` name:
| jQuery | Outcome |
| --- | --- |
| `$(".btn-red");` | only the elements with **class="btn-red"** |

##

### Select the `:first` element of something:
| jQuery | Outcome |
| --- | --- |
| `$("div:first");` | only the **:first** **&lt;div&gt;** element |
| `$(".btn:first");` | only the **:first** element with **class="btn"** |

##

### Select the `:last` element of something:
| jQuery | Outcome |
| --- | --- |
| `$("a:last");` | only the **:last** **&lt;a&gt;** element |
| `$(".red:last");` | only the **:last** element with **class="red"** |

##

### Select the `:nth-child()` element of its parent:
| jQuery | Outcome |
| --- | --- |
| `$("p:nth-child(2)");` | only the **2nd** **&lt;p&gt;** element |
| `$("p:nth-child(2n)");` | every **2nd** **&lt;p&gt;** element |
| `$("p:nth-child(2n+1)");` | every **2nd** **&lt;p&gt;** element, starting with the **1st** item |
| `$(".large:nth-child(3)");` | only the **3rd** element with **class="large"** |
| `$(".large:nth-child(3n)");` | every **3rd** element with **class="large"** |
| `$(".large:nth-child(3n+4)");` | every **3rd** element with **class="large"**, starting with the **4th** item |

##

### Select the `:eq()` element of its parent:
*`:eq()` uses the JavaScript 0-based indexing*

| jQuery | Outcome |
| --- | --- |
| `$("div:eq(2)");` | only the **3rd** **&lt;div&gt;** element |
| `$("div:eq(-2)");` | only the **2nd to last** **&lt;div&gt;** element |
| `$(".orange:eq(3)");` | only the **4th** element with **class="orange"** |
| `$(".orange:eq(-3)");` | only the **3th to last** element with **class="orange"** |

##

### Select every `:even` element of its parent:
| jQuery | Outcome |
| --- | --- |
| `$("a:even");` | every **:even** **&lt;a&gt;** element |
| `$(".yellow:even");` | every **:even** element with **class="yellow"** |

##

### Select every `:odd` element of its parent:
| jQuery | Outcome |
| --- | --- |
| `$("p:odd");` | every **:odd** **&lt;p&gt;** element |
| `$(".green:odd");` | every **:odd** element with **class="green"** |

##

### Select everything, but `:not` those specified:
| jQuery | Outcome |
| --- | --- |
| `$(".btn:not(.btn-submit)");` | selects every element with **class="btn"** except **:not** the **class="btn-submit"** |
| `$("div:not(div:first)");` | selects all **&lt;div&gt;** elements, except **:not** the **:first** **&lt;div&gt;** |

##

### Select all `direct children` of a parent element:
| jQuery | Outcome |
| --- | --- |
| `$("div>p");` | every direct **&lt;p&gt;** child of the **&lt;div&gt;** elements |
| `$(".para>a");` | every direct **&lt;a&gt;** child of the **class="para"** elements |

##

### Select all `children` of a parent element, regardless if it's a direct child or not:
| jQuery | Outcome |
| --- | --- |
| `$("div p");` | all **&lt;p&gt;** children of the **&lt;div&gt;** elements |
| `$(".para a");` | all **&lt;a&gt;** children of the **class="para"** elements |

##

### Select only those elements currently `:visible` or `:hidden`
| jQuery | Outcome |
| --- | --- |
| `$("p:visible");` | only if the **&lt;p&gt;** is currently **:visible** |
| `$("p:hidden");` | only if the **&lt;p&gt;** is currently **:hidden** |

##
##

## **TRAVERSING THE DOM WITH JQUERY**

### `.parent()` selector
| jQuery | Outcome |
| --- | --- |
| `$("p").parent();` | selects the parent of **&lt;p&gt;** elements |
| `$(".btn").parent();` | selects the parent of the elements with **class="btn"** |

##

### `.children()` selector
| jQuery | Outcome |
| --- | --- |
| `$("div").children();` | selects all of the children of **&lt;div&gt;** elements |
| `$("div").children("p");` | selects only the **&lt;p&gt;** children of the **&lt;div&gt;** elements |

##

### `.siblings()` selector
| jQuery | Outcome |
| --- | --- |
| `$("li").siblings();` | selects all siblings of the **&lt;li&gt;** elements |

##

### `.first()` selector
| jQuery | Outcome |
| --- | --- |
| `$(".blue").first();` | selects only the **.first()** element with **class="blue"** |
| `$(".blue").first("a");` | selects only the **.first()** **&lt;a&gt;** element with **class="blue"** |

### `.last()` selector
| jQuery | Outcome |
| --- | --- |
| `$(".purple").last();` | selects only the **.last()** element with **class="purple"** |
| `$(".purple").last("a");` | selects only the **.last()** **&lt;a&gt;** element with **class="purple"** |

##

### `.next()` selector
| jQuery | Outcome |
| --- | --- |
| `$("li").next();` | selects the **.next()** **&lt;li&gt;** element |

##

### `.prev()` selector
| jQuery | Outcome |
| --- | --- |
| `$("li").prev();` | selects the **.prev()** **&lt;li&gt;** element |

##

### `.filter()` selector
| jQuery | Outcome |
| --- | --- |
| `$("li").filter(".menu-item");` | filters all **&lt;li&gt;** elements only with **class="menu-item"** |

##
##

## **JQUERY DOM MANIPULATION**
> full list can be found here: [jQuery Manipulation](https://api.jquery.com/category/manipulation/)

### `.html()` selector
| jQuery | Outcome |
| --- | --- |
| `$("footer").html("<h2>New Text!</h2>");` | replaces everything in the **&lt;footer&gt;** with **&lt;h2&gt;New Text!&lt;/h2&gt;** |

##

### `.text()` selector
| jQuery | Outcome |
| --- | --- |
| `$("li:first").text("About Me");` | updates the **:first** **&lt;li&gt;** element's text with *About Me* |

##

### `.append()` selector
| jQuery | Outcome |
| --- | --- |
| `$("div.first-div").append("<p>New paragraph</p>");` | appends a new **&lt;p&gt;** element to the **&lt;div&gt;** with **class="first-div"** |

##

## **STYLING USING JQUERY MANIPULATION**
> further info can be found here: [jQuery Style Manipulation](https://api.jquery.com/category/manipulation/style-properties/)

##

### `.css()` selector
| jQuery | Outcome |
| --- | --- |
| `$("#nav").css("background-color", "black");` | updates the element with **id="nav"** to have CSS *background-color: black;* |
| `$("#nav").css({"background-color": "black", "color": "white"});` | updates the element with **id="nav"** to have CSS *background-color: black;* and font *color: white;* |
| `$("#nav").css({"background-color": "black", "color": "white", "font-weight": "bold"});` | updates the element with **id="nav"** to have CSS *background-color: black;*, *color: white;*, and *font-weight: bold;* |

##

### `.addClass()` selector
| jQuery | Outcome |
| --- | --- |
| `$("p").addClass("red");` | appends **class="red"** to all **&lt;p&gt;** elements |
| `$("p").addClass("red underline");` | appends **class="red underline"** to all **&lt;p&gt;** elements |

##

### `.removeClass()` selector
| jQuery | Outcome |
| --- | --- |
| `$("p").removeClass("red");` | removes **class="red"** from all **&lt;p&gt;** elements |
| `$("p").removeClass("red underline");` | removes **class="red underline"** from all **&lt;p&gt;** elements |

##

### `.removeClass()` + `.addClass()` selectors
| jQuery | Outcome |
| --- | --- |
| `$("p").removeClass("red").addClass("blue");` | removes **class="red"** from all **&lt;p&gt;** elements, but adds **class="blue"** instead |

##

## **JQUERY EVENTS**
> further examples can be found here: [jQuery Events](https://api.jquery.com/category/events/)

##

### `.on("click")` function
~~~~js
$("#btn").on("click", function() {
    // your code;
});
~~~~
Once the element with **id="btn"** is clicked, then it will execute whatever is in `// your code`

##

### `.click()` function
~~~~js
$("#btn").click(function() {
    // your code;
});
~~~~
Same as above: once the element with **id="btn"** is clicked, then it will execute whatever is in `// your code`

##

### `.mouseenter()` function (similar to the CSS *:hover* effect)
~~~~js
$("#btn").mouseenter(function() {
    // your code;
});
~~~~
Once the user hovers over the element with **id="btn"**, then it will execute whatever is in `// your code`

##

### `.mouseleave()` function
~~~~js
$("#btn").mouseleave(function() {
    // your code;
});
~~~~
Once the user stops hovering over the element with **id="btn"**, then it will execute whatever is in `// your code`

##

### `.replaceWith()` | `.removeAttr()` | `.attr()` functions
~~~~js
$("a").replaceWith("<button>Button</button>").removeAttr("href");
~~~~
Replaces **&lt;a&gt;** tags with **&lt;button&gt;** instead, and removes the **href="#"** attribute since it's now a **button** instead of **anchor**.

~~~~js
$("a").attr("href", "http://www.google.com");
~~~~
Adds **href="http://www.google.com"** attribute to all **&lt;a&gt;** elements.

##

### `.wrap()` function
~~~~js
$("p").click(function() {
    $("p").children("a").wrap("<mark></mark>");
});
~~~~
If a user clicks on a **&lt;p&gt;** element, then any child **&lt;a&gt;** element will get **&lt;mark&gt;&lt;/mark&gt;** wrapped around it.

##

### Additional jQuery Events:

| jQuery | Outcome |
| --- | --- |
| `.show();` | shows the element |
| `.hide();` | hides the element |
| `.toggle();` | toggles show/hide |
| `.slideDown();` | slide down effect |
| `.slideUp();` | slide up effect |
| `.slideToggle();` | toggles slide up/down |
| `.fadeIn();` | fade in effect |
| `.fadeOut();` | fade out effect |
| `.fadeToggle();` | toggles fade in/out |
| `.fadeTo(1000, 0.5);` | fade effect (speed: 1000ms / opacity: 0.5) |

##

### Animation Speeds:

| jQuery | Meaning | Length |
| --- | --- | --- |
| `.___("slow");` | **slow** animation speed | 600ms (*0.6 seconds*) |
| `.___("medium");` | **medium/default** animation speed | 400ms (*0.4 seconds*) |
| `.___("fast");` | **fast** animation speed | 200ms (*0.2 seconds*) |
| `.___(1000);` | **custom** animation speed | 1000ms (*1 second*) |
| `.___(2000);` | **custom** animation speed | 2000ms (*2 seconds*) |

##
##

## **JQUERY : (THIS) SELECTOR**

If you have multiple elements that are similar (&lt;div&gt;, &lt;p&gt;, &lt;a&gt;, &lt;li&gt;, etc.), and you only need to target the specific element that the user interacts with, then the **(this)** selector should be used.

~~~~js
$("button").click(function() {
    $(this).prev("p").slideToggle("slow");
    $(this).siblings(":header").css({"font-size": "2em", "background-color": "#FF0000"});
});
~~~~

- For each &lt;button&gt; that the user *clicks*, then that specific button/**(this)** is targeted.
- In the example above, the button's *previous* &lt;p&gt; tags will have a *slow* **.slideToggle**.
- Also, the **:header** elements (&lt;h1&gt; &lt;h2&gt; etc.) that belong to the button's *siblings* will have their CSS properties updated (*font-size: 2em;* and *background-color: #FF0000;*).

##
##

## **(THIS)** + **VARIABLES**

~~~~js
// when clicking an element with .box class
$(".box").click(function() {
    // split (this) element's class attributes on a blank _space_ and store in variable called myClasses
    var myClasses = $(this).attr("class").split(" ");
    // the first[0] class attribute will be the new variable 'boxClass'
    var boxClass = myClasses[0];
    // the second[1] class attribute will be the new variable 'className'
    var className = myClasses[1];
    // if (this.box) background-color is 'red'
    if ($(this).css("background-color") == "rgb(255, 0, 0)") {
        // change the class name so that it updates the bg-color to 'black'
        $(".") + className).css("background-color", "#000");
    // otherwise / else
    } else {
        // change all '.box' elements to 'black'
        $("." + boxClass).css("background-color", "#000");
        // then change the color of all elements with the same class name as the clicked .box to 'red'
        $("." + className).css("background-color", "red");
    }
});
~~~~

[LIVE DEMO on CodePen](https://codepen.io/traveltimn/pen/pYZoQW)