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

### Select an element using its `#id` name:
| jQuery | Outcome |
| --- | --- |
| `$("#jumbotron");` | only the element with **id="jumbotron"** |

### Select an element using its `.class` name:
| jQuery | Outcome |
| --- | --- |
| `$(".btn-red");` | only the elements with **class="btn-red"** |

### Select the `:first` element of something:
| jQuery | Outcome |
| --- | --- |
| `$("div:first");` | only the **:first** **&lt;div&gt;** element |
| `$(".btn:first");` | only the **:first** element with **class="btn"** |

### Select the `:last` element of something:
| jQuery | Outcome |
| --- | --- |
| `$("a:last");` | only the **:last** **&lt;a&gt;** element |
| `$(".red:last");` | only the **:last** element with **class="red"** |

### Select the `:nth-child()` element of its parent:
| jQuery | Outcome |
| --- | --- |
| `$("p:nth-child(2)");` | only the **2nd** **&lt;p&gt;** element |
| `$("p:nth-child(2n)");` | every **2nd** **&lt;p&gt;** element |
| `$("p:nth-child(2n+1)");` | every **2nd** **&lt;p&gt;** element, starting with the **1st** item |
| `$(".large:nth-child(3)");` | only the **3rd** element with **class="large"** |
| `$(".large:nth-child(3n)");` | every **3rd** element with **class="large"** |
| `$(".large:nth-child(3n+4)");` | every **3rd** element with **class="large"**, starting with the **4th** item |

### Select the `:eq()` element of its parent [*`:eq()` uses the JavaScript 0-based indexing*]:
| jQuery | Outcome |
| --- | --- |
| `$("div:eq(2)");` | only the **3rd** **&lt;div&gt;** element |
| `$("div:eq(-2)");` | only the **2nd to last** **&lt;div&gt;** element |
| `$(".orange:eq(3)");` | only the **4th** element with **class="orange"** |
| `$(".orange:eq(-3)");` | only the **3th to last** element with **class="orange"** |
