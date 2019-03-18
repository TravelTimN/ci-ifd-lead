#### return [Home](https://github.com/TravelTimN/ci-ifd-lead/blob/master/README.md)

##

# IFD Week 2: `jQuery`

### **jQuery** is a JavaScript library

##

#### JavaScript engines by browser ([further reading](https://en.wikipedia.org/wiki/List_of_ECMAScript_engines))
| JS ENGINE | BROWSER |
| --- | --- |
| *V8* | **Chrome** |
| *Spider Monkey* | **Firefox** |
| *Nitro* | **Safari** |
| *Chakra* | **Edge** |
| | **Internet Explorer** |

##

#### **Terminology**
| TERM | DESCRIPTION |
| --- | --- |
| **DOM** | "Document Object Model" |
| | *The DOM is an API, not a library* |
| **API** | "Application Programming Interface" |
| | *Intermediary software allowing applications to work together* |
| **WHATWG** | "Web Hypertext Application Technology Working Group" |
| | *Maintains the DOM standard for all browsers* |

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

### **SELECTING ELEMENTS USING JQUERY**

- Select a specific HTML element:
  | jQuery | Outcome |
  | --- | --- |
  | `$("a");` | all **&lt;a&gt;** elements |
  | `$("img");` | all **&lt;img&gt;** elements |
  | `$("div");` | all **&lt;div&gt;** elements |

- Select an element using its **#id** name:
  | jQuery | Outcome |
  | --- | --- |
  | `$("#jumbotron");` | only the element with **id="jumbotron"** |

- Select an element using its **.class** name:
  | jQuery | Outcome |
  | --- | --- |
  | `$(".btn-red");` | only the element with **class="btn-red"** |

