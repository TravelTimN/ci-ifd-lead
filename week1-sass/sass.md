#### return [Home](https://github.com/TravelTimN/ci-ifd-lead/blob/master/README.md)

##

# IFD Week 1: `Sass`

**Command**: `sass --watch main.scss`

---

##

**Debugging in Chrome**: Chrome Settings **>** "*Enable CSS Source Maps*"

---

##

### **QUESTION**:
What is the difference between *SASS* | *SCSS* | *LESS*?

<details>
<summary>Click to see the <b>Answer</b></summary>

- **SASS** is the oldest SassScript syntax, sometimes called "*indented syntax*" which doesn't use `{ } ;` but relies on indentation and spaces.
- **SCSS** is the a newer SassScript syntax, referred to as "*sassy CSS*", which does make use of `{ } ;` like in CSS.
- **LESS** is the newest preprocessor syntax, supported by Bootstrap originally, however from Bootstrap 4+, it switched to SassScript.
- SassScript (SASS/SCSS) is based on *Ruby*. LESS is based on *JavaScript*.
- Most developers code with **SCSS** (`.scss`)
</details>

---

##

### *NESTED PROPERTIES*:
Styles multiple elements that use the same *prefix*.

~~~~css
div {
  p {
    font: {
      family: open-sans;
      size: 16px;
      weight: bold;
    }
    text: {
      align: center;
      transform: uppercase;
    }
  }
}
~~~~

### **QUESTION**:
What's another common property that has several elements, similar to `font:` and `text:`?

<details>
<summary>Click to see the <b>Answer</b></summary>

`background:` (*-image* *-color* *-attachment* *-repeat* etc.)

Other examples could be: `border:` | `grid:` | `column:` | `flex:` | `list-style:` | `margin:` | `outline:` | `padding:` | `transition:` | `word:` | etc.
</details>

---

##

### *VARIABLES*:
Reusable code in *variables*, similar to JavaScript variables.

~~~~css
$red: #FF1100;
$orange: #FF5100;
$yellow: #FFD000;
$green: #03FF42;
$blue: #018FC3;
$purple: #A602FF;
$white: #FFFFFF;
$black: #000000;

$btn-width: 300px;
$btn-height: $btn-width / 2;

$txtShadow: 2px 2px 2px var($black);
~~~~

---

##

### *FUNCTIONS*:
Easier to modify values or analyze lists, similar to JavaScript functions.

##### Function to convert px to em

~~~~css
@function pxToEm($value, $base) {
  @return ($value / $base) + em;
}

h1 {
  font-size: pxToEm(32, 16);
}
~~~~

### **QUESTION**:
What will be the result of our new `<h1>` tag size?

<details>
<summary>Click to see the <b>Answer</b></summary>

`2em`
</details>

---

##

### *LISTS | MAPS*:
Sass Lists are similar to JavaScript lists, whereby Maps are similar to JavaScript objects.

#### List
~~~~css
$colors: $red, $orange, $yellow, $green, $blue, $purple;
~~~~

#### Map
*(contains key-value pairs)*

~~~~css
$colors: (
  red: #FF1100,
  orange: #FF5100,
  yellow: #FFD000,
  green: #03FF42,
  blue: #018FC3,
  purple: #A602FF
);
~~~~

### **QUESTION**:
What items are considered the **keys** and **values** from our *map* above?

<details>
<summary>Click to see the <b>Answer</b></summary>

- `$colors:` = the Sass *map*
- `red:`, `orange:`, `yellow:`, `green:`, `blue:`, `purple:` = *map keys*
- `#FF1100`, `#FF5100`, `#FFD000`, `#03FF42`, `#018FC3`, `#A602FF` = map *values*
</details>

---

##

### *ITERATION USING INTERPOLATION*:
You can take *key-value pairs* and iterate through them to create multiple classes.

> See an example of this in action on [Codepen.io](https://codepen.io/traveltimn/pen/GeyqQQ)

~~~~css
@each $key, $value in $colors {
  .btn-#{$key} {
    background-color: $value;
  }
}
~~~~

### **QUESTION**:
What would the result give us?

<details>
<summary>Click to see the <b>Answer</b></summary>

~~~~css
.btn-red {
  background-color: #FF1100;
}
.btn-orange {
  background-color: #FF5100;
}
.btn-yellow {
  background-color: #FFD000;
}
.btn-green {
  background-color: #03FF42;
}
.btn-blue {
  background-color: #018FC3;
}
.btn-purple {
  background-color: #A602FF;
}
~~~~
</details>

### **Bonus Question**:
What represents the **interpolation** above?

<details>
<summary>Click to see the <b>Answer</b></summary>

`{$key}`
</details>

---

##

### *LOOPS*:
*for loops* in SASS work in a similar way to JavaScript, but start with `@for`

~~~~css
$class: image;

@for $i from 1 through 4 {
  .#{$class}-#{$i} {
    width: 60px + $i;
  }
}
~~~~

### **QUESTION**:
What would the result give us?

<details>
<summary>Click to see the <b>Answer</b></summary>

~~~~css
.image-1 {
  width: 61px;
}
.image-2 {
  width: 62px;
}
.image-3 {
  width: 63px;
}
.image-4 {
  width: 64px;
}
~~~~
</details>

### **Bonus Question**:
What represents the **interpolation** above?

<details>
<summary>Click to see the <b>Answer</b></summary>

`{$class}` and `{$i}`
</details>

---

##

### *CASE DISTINCTIONS*:
`@if` | `@else if` | `@else` conditional directives.

These only execute if specific conditions are met, similar to JavaScript.

~~~~css
$box: 200;

div {
  @if $box > 200 {
    background-color: $red;
  } @else if $box < 200 {
    background-color: $yellow;
  } @else {
    background-color: $orange;
  }
}
~~~~

### **QUESTION**:
What color will the `<div>` be?

<details>
<summary>Click to see the <b>Answer</b></summary>

Orange (`#FF5100`)
</details>

---

##

### *PLACEHOLDERS*:
Reusable `%code` used to `@extend` somewhere else in your code.

~~~~css
%bg-img {
  background: {
    size: cover;
    position: center center;
    repeat: no-repeat;
  }
}
div {
  @extend %bg-img;
}
.section-1 {
  background-image: url("../img/img1.jpg");
}
.section-2 {
  background-image: url("../img/img2.jpg");
}
~~~~

### **QUESTION**:
What would the result be?

<details>
<summary>Click to see the <b>Answer</b></summary>

All `<div>` items would get the `background-size`|`-position`|`-repeat` properties, but each have their own `url("...")`
</details>

---

##

### **PART 1** -- *MIXINS*:
Similar to `%placeholders` but can pass **parameters** and **arguments** *(similar to a "template")*.

~~~~css
@mixin button($color, $size) {
  width: $size,
  height: $size / 2;
  border: 1px solid $color;

  @if $color == #A602FF {
    color: $black;
  } @else {
    color: $white;
  }
}
.btn {
  @include button(#A602FF, 200px)
}
~~~~

### **QUESTION**:
What color text will the button have if we pass purple (`#A602FF`) as the `$color` argument?

<details>
<summary>Click to see the <b>Answer</b></summary>

`color: $black;` (`#000000`)
</details>

### **PART 2** -- *MIXINS + `@content`*:
Places the `@include` properties within the `@mixin`

> See an example of this in action on [Codepen.io](https://codepen.io/traveltimn/pen/XGVjvE)

~~~~css
@mixin TrumpsWall() {
  width: 100vw;
  height: 50vh;
  @content;
  color: rgba(255, 255, 255, 0.5);
}
.borderCrossing {
  @include TrumpsWall {
    background-color: transparent;
    border: 1px dashed transparent;
  }
}
~~~~

### **QUESTION**:
Where would the `background-color` and `border` be placed in the `@mixin`?

<details>
<summary>Click to see the <b>Answer</b></summary>

Immediately *after* `height`, and just *before* `color`.
</details>

---

##

### *PARTIALS*:
`@import` various `.scss` files into a `main.scss` file with different concerns.

> file: "main.scss"

~~~~css
@import "helpers/colors";
@import "helpers/variables";
@import "helpers/mixins";
@import "helpers/media_queries";

@import "components/navigation";
@import "components/footer";

@import "partials/reset";
@import "partials/typography";
@import "partials/grids";
@import "partials/buttons";

@import "pages/home";
@import "pages/about";
@import "pages/contact";

@import "vendor/fontawesome.all";
@import "vendor/jquery.ui.core";
@import "vendor/bootstrap.min";
~~~~

### **QUESTION**:
What would happen if we push the **"helpers/"** `@imports` somewhere else in the file?

<details>
<summary>Click to see the <b>Answer</b></summary>

We'd get *undefined errors* since our **colors** and **variables** aren't defined first.
</details>

---

##

### *MEDIA QUERIES*:
You can nest **media_queries** within SASS, but you can't nest them in generic CSS.

> file: "helpers/media_queries.scss"

~~~~css
@tablet-width: 768px;
@desktop-width: 992px;
@large-desktop-width: 1200px;

@mixin table {
  @media (min-width: $tablet-width) and (max-width: $desktop-width - 1px) {
    @content
  }
}
@mixin desktop {
  @media (min-width: $desktop-width) and (max-width: $large-desktop-width - 1px) {
    @content
  }
}
@mixin large-desktop {
  @media (min-width: $large-desktop-width) {
    @content
  }
}
~~~~

> file: "partials/reset.scss"

~~~~css
%reset {
  margin: 0 auto;
  padding: 0;
}
~~~~

> file: "partials/buttons.scss"

~~~~css
.btn {
  @extend %reset;
  @include tablet {
    font-size: 10px;
  }
  @include desktop {
    font-size: 16px;
  }
  @include large-desktop {
    font-size: 22px;
  }
}
~~~~
