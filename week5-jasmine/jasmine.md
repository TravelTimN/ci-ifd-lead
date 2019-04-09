#### return [Home](https://github.com/TravelTimN/ci-ifd-lead/blob/master/README.md)

##

# IFD Week 1: `Jasmine TDD`

### **JASMINE**

**Jasmine** is a behavior-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests.

Basically, Jasmine is a testing framework that you can use to write tests for your JavaScript code.

```js
describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});
```

Jasmine can be used a few ways. Check out some additional resources:

- [Jasmine (*standalone*)](https://github.com/jasmine/jasmine)
- [Jasmine for **Python**](https://jasmine.github.io/setup/python.html)
- [Jasmine for **Ruby**](https://jasmine.github.io/setup/ruby.html)
- [Jasmine for **node.js**](https://jasmine.github.io/setup/nodejs.html)

#

### **BOILERPLATE**

Get the latest CDN for Jasmine from **[cdnjs](https://cdnjs.com/libraries/jasmine)**. The current version of Jasmine at time of writing this guide is **[Jasmine 3.4.0](https://cdnjs.com/libraries/jasmine/3.4.0)** (*April 2019*).

#### Scripts

In order to use Jasmine properly, the order of `<script>` tags loaded in your document is important! The order must be:

1. *jasmine.js*
2. *jasmine.html.js*
3. *jasmine.boot.js*

| **ORDER** | **&lt;SCRIPT&gt;** |
| --- | --- |
| 1 | `<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.4.0/jasmine.js"></script>` |
| 2 | `<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.4.0/jasmine-html.js"></script>` |
| 3 | `<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.4.0/boot.js"></script>` |
| | *don't forget the CSS file* |
| | `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.4.0/jasmine.css">` |

#### Folders

You should have a **testing** folder which contains two sub-folders, namely **spec** and **scripts**. An example of what your folder structure could look like with your test folders:

*Note: this isn't mandatory, but highly recommended.*

```
index.html
|
└─── testing/
|   |
│   └─── scripts/
│   |   │   file.js
|   |
│   └─── spec/
│   |   │   fileSpecs.js
│   
└─── assets/
    |
    └─── js/
    |   |   script.js
    |
    └─── css/
    |   |   style.css
    |
    └─── img/
        |   favicon.png
```

**! IMPORTANT !** You must load the source code (*file.js*) before loading the specifications (*fileSpecs.js*) in your html file.

For example, an simple boilerplate for Jasmine testing:

```html
<html>
<head>
    <title>Jasmine Testing</title>

    <!-- Jasmine CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.4.0/jasmine.css">

</head>
<body>

    <!-- Jasmine JS files -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.4.0/jasmine.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.4.0/jasmine-html.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.4.0/boot.js"></script>

    <!-- Source Code (this must come before the tests!) -->
    <script type="text/javascript" src="testing/scripts/file.js"></script>

    <!-- Specifications (this must come after the source code!) -->
    <script type="text/javascript" src="testing/spec/fileSpec.js"></script>

</body>
</html>
```

##

### **RED-GREEN-REFACTORING**

The red-green-refactoring philosohy is simply a method of testing with three stages:

| | |
| --- | --- |
| **RED** | *Create a test, and make it fail!* :rotating_light: |
| **GREEN** | *Make your test pass by any means necessary!* |
| **REFACTOR** | *Change the code to remove duplication while ensuring all tests still pass* |

