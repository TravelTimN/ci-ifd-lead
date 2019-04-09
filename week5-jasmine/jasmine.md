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
| | ***don't forget the CSS file*** |
| * | `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.4.0/jasmine.css">` |

#### Folders

You should have a **testing** folder which contains two sub-folders, namely **spec** and **scripts**. An example of what your folder structure could look like with your test folders:

*Note: this isn't mandatory, but highly recommended.*

```
index.html
|
└────> testing/
|    |
│    └────> scripts/
|    |    |
│    |    └────>  file.js
|    |
│    └────> spec/
|         |
│         └────>  fileSpecs.js
│   
└────> assets/
     |
     └────> js/
     |    |
     |    └────>  script.js
     |
     └────> css/
     |    |
     |    └────>  style.css
     |
     └────> img/
          └────>  favicon.png
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

| | | |
| --- | --- | --- |
| :no_entry: | **RED** | *Create a test, and make it fail!* |
| :white_check_mark: | **GREEN** | *Make your test pass by any means necessary!* |
| :recycle: | **REFACTOR** | *Change the code to remove duplication while ensuring all tests still pass.* |

##

### **DEFENSIVE PROGRAMMING**

Defensive Programming essentially means: *writing code that will **catch** and **deal with** potential issues*.

> *"A good programmer is someone who always looks both ways before crossing a one-way street".* (**Doug Linder**)

We should always expect that our uses will *do something that we hadn't planned or intended*! This is why Defensive Programming is relatively important.

Let's look at an example of a simple *addition* function below. We're looking for two parameters (a, b) in our *addition* function. **Defensive Programming** comes into play by checking the **typeof()** value the user inputs, ensuring that the *type* is a *number*. If both **a** and **b** *types* are *numbers*, then we can return the values of both of them combined; otherwise we simply return *"Error!"*.

```js
function addition(a, b) {
  if(typeof(a) == "number" && typeof(b) == "number") {
      return a + b;
  } else {
      return "Error!";
  }
}
```

##

### **Calculator**

An example from the Code Institute lessons is the **calculator** test suite.

1. I want to test a **calculator**.
2. I am going to test the **addition** function.
3. I want to get the result of **42**.
4. I expect the result of **20** + **22** to be **42**.

Using the **Jasmine** medthod of building a *test suite*, this could be simple as:

```js
describe("Calculator", function() {
  describe("Addition tests", function() {
    it("should return 42", function() {
      expect(addition(20,22)).toBe(42);
    });
  });
});
```

- **describe({...})**
    - ***describe*** the _"desired function(s)"_
- **it({...})**
    - ***it*** should _"do something"_
- **expect(...)**
    - ***expect*** the _"outcome of"_
- **toBe(...)**
    - ***toBe*** _"desired response"_

##

### **beforeEach**(function)

Our **Calculator** above isn't very effective, because it will constantly add any subsequent numbers that may follow. The **beforeEach**(function) will essentially clear each **describe**(function) back to the initial state, which permits us to test multiple functions consecutively.

*[ think of it like clearing cache or cookies on your computer, setting things back to null ]*

The **beforeEach**(function) is also known as a "*callback*" function.

By adding the **beforeEach**(function) and passing additional **it**(functions), our results will be **42** and **26** instead of a combined **68**.

```js
describe("Calculator", function() {

  beforeEach(function() {
    calc = new Calculator;
  });

  describe("Addition tests", function() {
    it("should return 42", function() {
      calc.add(20);
      calc.add(22);
      expect(calc.value).toBe(42);
    });
    it("should return 26", function() {
      calc.add(7);
      calc.add(19);
      expect(calc.value).toBe(26);
    });
  });
});
```

##

### **spyOn**()

**Spies** are called upon by using the **spyOn**() method.

Essentially, **spies** allow us to check if our function(s) have been called or not. It's also a way to check that our function(s) have been called *correctly*! Let's add another **it**(function) to our calculator

```js
    it("should return an error if we don't supply two numbers", function() {
      spyOn(window, "alert");
      calc.add("Lorem ipsum");
      expect(window.alert).toHaveBeenCalledWith("Error!");
    });
```