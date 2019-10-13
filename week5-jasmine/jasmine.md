#### return [Home](https://github.com/TravelTimN/ci-ifd-lead/blob/master/README.md)

##

# IFD Week 5: `Jasmine TDD`

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
|    └────> test.html
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
          |
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

Let's look at an example of a simple *addition* function below. We're looking for two parameters (a, b) in our *addition* function. **Defensive Programming** comes into play by checking the **typeof()** value the user inputs, ensuring that the *type* is a *"number"*. If both **a** and **b** *types* are *"numbers"*, then we can return the values of both of them combined; otherwise we simply return *"Error!"*.

```js
function addition(a, b) {
  if (typeof(a) == "number" && typeof(b) == "number") {
      return a + b;
  } else {
      return "Error!";
  }
}
```

We can improve this even further by making a new **object** called `Calculator`, which will increment the *value* each time it gets called. We'll set the initial *value* to `0`, and increment any number with `this.value += number` for every time the Calculator object is called. We're still using **Defensive Programming** by ensuring the **typeof()** is actually a *"number"*.

*Note: be careful when using this method for "division", since any number divided by 0 will always be **0**!*

```js
Calculator = function() {
  this.value = 0;
}

Calculator.prototype.add = function(number) {
  if (typeof(number) == "number") {
      this.value += number;
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

Essentially, **spies** allow us to check if our function(s) have been called or not. It's also a way to check that our function(s) have been called *correctly*! Let's add another **it**(function) to our calculator:

```js
    it("should return an error if we don't supply two numbers", function() {
      spyOn(window, "alert");
      calc.add("Lorem ipsum");
      expect(window.alert).toHaveBeenCalledWith("Error!");
    });
```

*Note: `alert()` doesn't actually provide a pop-up on screen like normal. That's because Jasmine is "capturing" the error/alert, and it will only be displayed in test results.*

##

### **FizzBuzz Challenge**

<details>
  <summary>FizzBuzz Challenege (click to expand)</summary>
Your challenge is to write some tests for the FizzBuzz game.

FizzBuzz is a classic programming problem that is often asked as an interview question. Create a function called **fizzBuzz**. This function should take in number as a parameter. The function should do the following:

- If the number is divisible by **3** and **5**, then return "**FizzBuzz**"
- If the number is divisible by **3**, then return "**Fizz**"
- If the number is divisible by **5**, then return "**Buzz**"
- Else just return the *number*

Write a set of tests that pass in various values to the FizzBuzz function and ensure that the function meets the above requirements. Make sure that you test all different "*types*" of inputs that the function may receive.
</details>

#### **FizzBuzz: Step 1** - source code

```js
fizzBuzz = function (number) {
    if (typeof (number) == "number") {
        if (number % 3 === 0 && number % 5 === 0) {
            return ("FizzBuzz");
        } else if (number % 3 === 0) {
            return ("Fizz");
        } else if (number % 5 === 0) {
            return ("Buzz");
        } else {
            return number;
        }
    } else {
        return "Error!";
    }
};
```

#### **FizzBuzz: Step 2** - tests / specifications

```js
describe("FizzBuzz", function () {

    beforeEach(function () {
        FizzBuzz = new fizzBuzz();
    });

    describe("Checks Modulus", function () {
        it("should exist", function () {
            expect(fizzBuzz).toBeDefined();
        });

        it("should return FizzBuzz if divisible by 3 and by 5", function () {
            var result = fizzBuzz(15);
            expect(result).toBe("FizzBuzz");
        });

        it("should return Fizz if divisible by 3", function () {
            var result = fizzBuzz(9);
            expect(result).toBe("Fizz");
        });

        it("should return Buzz if divisible by 5", function () {
            var result = fizzBuzz(25);
            expect(result).toBe("Buzz");
        });

        it("should return number if not divisile by 3 or by 5", function () {
            var result = fizzBuzz(2);
            expect(result).toBe(2);
        });

        it("should return an error if we don't supply a number", function() {
            spyOn(window, "alert");
            var result = fizzBuzz(alert("Error!"));
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});
```

##

##

### **That's all great Tim - but how do I use Jasmine for my Milestone Projects?**

Without giving away all of the answers, I'll leave a few breadcrumbs to help you along your path to build some amazing Test-Driven Development (TDD) into your Milestone Project using Jasmine!

It's important to note that Jasmine is not meant for testing things like **click events** for example, but rather for testing functions that may contain events.

You could accomplish this in a few simple steps:

1. move your *events* (ie: click events) into a *function*.
2. call the *function* from within your code.
3. using Jasmine, test the *function* itself, not the *event*.

##

### **Further Resources | Additional Reading**

#### **Jasmine + other Libraries** *(relevant to this milestone project)*

- **[Jasmine + jQuery](https://www.npmjs.com/package/jasmine-jquery)**
    - *example: Simon Game* :video_game:
- **[Jasmine + D3.js](http://busypeoples.github.io/post/testing-d3-with-jasmine/)**
    - *example: Data Dashboard* :bar_chart:
- **[Jasmine + Google Maps](https://kwilson.io/blog/mock-out-google-maps-geocoder-with-jasmine-spies/)**
    - *example: Holiday Planner* :earth_africa: