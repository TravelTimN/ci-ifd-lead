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

### Select every `:even` element of its parent:
| jQuery | Outcome |
| --- | --- |
| `$("a:even");` | every **:even** **&lt;a&gt;** element |
| `$(".yellow:even");` | every **:even** element with **class="yellow"** |

### Select every `:odd` element of its parent:
| jQuery | Outcome |
| --- | --- |
| `$("p:odd");` | every **:odd** **&lt;p&gt;** element |
| `$(".green:odd");` | every **:odd** element with **class="green"** |

### Select all `direct children` of a parent element:
| jQuery | Outcome |
| --- | --- |
| `$("div>p");` | every direct **&lt;p&gt;** child of the **&lt;div&gt;** elements |
| `$(".para>a");` | every direct **&lt;a&gt;** child of the **class="para"** elements |

### Select all `children` of a parent element, regardless if it's a direct child or not:
| jQuery | Outcome |
| --- | --- |
| `$("div p");` | all **&lt;p&gt;** children of the **&lt;div&gt;** elements |
| `$(".para a");` | all **&lt;a&gt;** children of the **class="para"** elements |

##

## **TRAVERSING THE DOM WITH JQUERY**

### `.parent()` selector
| jQuery | Outcome |
| --- | --- |
| `$("p").parent();` | selects the parent of **&lt;p&gt;** elements |
| `$(".btn").parent();` | selects the parent of the elements with **class="btn"** |

### `.children()` selector
| jQuery | Outcome |
| --- | --- |
| `$("div").children();` | selects all of the children of **&lt;div&gt;** elements |
| `$("div").children("p");` | selects only the **&lt;p&gt;** children of the **&lt;div&gt;** elements |

### `.siblings()` selector
| jQuery | Outcome |
| --- | --- |
| `$("li").siblings();` | selects all siblings of the **&lt;li&gt;** elements |

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

### `.next()` selector
| jQuery | Outcome |
| --- | --- |
| `$("li").next();` | selects the **.next()** **&lt;li&gt;** element |

### `.prev()` selector
| jQuery | Outcome |
| --- | --- |
| `$("li").prev();` | selects the **.prev()** **&lt;li&gt;** element |

##

## **JQUERY DOM MANIPULATION**













