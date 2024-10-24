# 2024 10 24 Intro to JavaScript

We start with the foundations when it comes to JS. Data types, variables, user-input and output, operators och if-statements.

<details open>
<summary>Table of content</summary>

[Data Types](#data-types-in-javascript)

- [String](#string)
- [Number](#number)
- [Boolean](#boolean)
- [Undefined](#undefined)
- [Null](#null)
- [Objects](#object)
- [Array](#array)
- [Functions](#functions)
- [Date](#date)

[Variables](#variables)

- [var](#var)
- [const](#const)
- [let](#let)

[If Statements](#if-statements)

- [Basic if-syntax](#basic-if-syntax)
- [if-else statement](#if-else-statement)
- [Comparison Operators](#comparison-operators)
  - [greater then, less then - <, >](#--greater-then-or-less-then)
- [if-else-if statments](#if-else-if-statments)
- [Truthy and Falsy](#truthy-and-falsy-values)
- [Logical Operators](#logical-operators)
  - [Logical AND - &&](#---logical-and)
  - [Logical OR - ||](#---logical-or)
  - [Logical NOT - !](#---logical-not)
  - [Nullish Coalescing](#---nullish-coalescing)

</details>

## Data Types in JavaScript

| Data Type   | Description                                                          |
| ----------- | -------------------------------------------------------------------- |
| `String`    | Represents text: `"hello"`, `'world'`.                               |
| `Number`    | Represents both integers and floating-point numbers: `42`, `3.14`.   |
| `Boolean`   | Represents logical values: `true` or `false`.                        |
| `Undefined` | A variable that has been declared but not yet assigned a value.      |
| `Null`      | Represents the intentional absence of any object value.              |
| `Object`    | Represents a collection of key-value pairs. More about it later.     |
| `Array`     | A list of values, objects or other arrrays: `[1, 2, 3]`.             |
| `Function`  | A block of code designed to perform a specific task: `function() {}` |
| `Date`      | Represents dates and times: `new Date()`.                            |

### String

A string is just a collection of characters with in quotes. It can be both double quotes and single quotes. But there also exist a third way of writing strings.

```js
"Niklas"; // Valid string
"Niklas" // Valid string
`Niklas`; // Also valid string, but with backtics.
```

These above are all equal, but the backtics-version have some extra functionality.

For instance, backtics allows multiline strings. The other two don't.

```js
"My name
is Niklas" // This won't work in a js-file.

`My name
is Niklas.` // This however works just fine.
```

Another of added functionality with backtics is the ability to inject variables inside the string, if it is defined with backtics.

```js
const name = "Niklas";
const lastName = "Fähnrich";

`Hello, my name is ${name} ${lastName}!`;
```

This is also called a string literal.

If we want to do the same thing with regular quotation marks, we need to concatinate. _( add )_.

```js
const name = "Niklas";
const lastName = "Fähnrich";

"Hello, my name is " + name + lastName + ".";
```

[Back to top](#2024-10-24-intro-to-javascript)

---

### Number

Represents number, both integers and decimal values. Just remember that decimal values are written with a period and not a comma.

```js
35; // Valid number
45.3; // Also valid number
```

[Back to top](#2024-10-24-intro-to-javascript)

---

### Boolean

A boolean represents either true or false.

```js
const somethingIsTrue = true;
const somethingIsFalse = false;
```

[Back to top](#2024-10-24-intro-to-javascript)

---

### Undefined

[Back to top](#2024-10-24-intro-to-javascript)

---

### Null

[Back to top](#2024-10-24-intro-to-javascript)

---

### Object

[Back to top](#2024-10-24-intro-to-javascript)

---

### Array

[Back to top](#2024-10-24-intro-to-javascript)

---

### Functions

[Back to top](#2024-10-24-intro-to-javascript)

---

### Date

A Date is just a value that represents a date or time.

```js
const now = new Date();
```

This `new Date()` returns a date object that we can manipulate in many ways and use in our applications.

[Back to top](#2024-10-24-intro-to-javascript)

---

## Variables

Variables is a way of storing values in resuable packages so to speak.

| Feature        | `var`                           | `let`                                       | `const`                                             |
| -------------- | ------------------------------- | ------------------------------------------- | --------------------------------------------------- |
| Scope          | Function-scoped                 | Block-scoped                                | Block-scoped                                        |
| Hoisting       | Yes, initialized as `undefined` | Yes, but not initialized before declaration | Yes, but not initialized before declaration         |
| Re-declaration | Allowed                         | Not allowed                                 | Not allowed                                         |
| Reassignment   | Allowed                         | Allowed                                     | Not allowed (for primitive values)                  |
| Immutability   | No                              | No                                          | Yes (for the reference, but not for objects/arrays) |

### var

`var` is a key word that is used to create variables. And the key words is always paired with a variable name and a value, and the value can of course be of different data types.

```js
var firstName = "Niklas";
console.log(firstName);
```

`var` has some special characteristics, one of them is that it is re-declarable. That means that we can declare the same variable again with a new value.

```js
var firstName = "Niklas";
console.log(firstName); // Niklas

var firstName = "Henrik"; // Re-declaration, it's valid.
console.log(firstName); // Henrik
```

You can also re-assign the value on a `var`.

```js
var firstName = "Henrik";
console.log(firstName); // Henrik

firstName = "Erik"; // Re-assignment, it's valid.
console.log(firstName); // Erik
```

`var` also has a function scoop, what is that? If a `var` is declared inside a function, it only lives inside that function. But if `var` is declared on the top level of a JS file, it gets "global" scope, which means it's accesable inside the entire JS-file.

Because of this, DON'T use `var` at all! Use the newer ones `let` and `const` instead.

[Back to top](#2024-10-24-intro-to-javascript)

---

### const

`const` is also keyword for creating variables. It stands for 'constant' which means it is supposed to be constant. It means we shouldn't change this variable after it has been created.

```js
const age = 39;
console.log(age); // 39

age = 45; // Won't work, VSC will sometimes complain and browser will always complain.
```

We can not re-declare a `const`.

```js
const age = 39;
const age = 45; // Won't work, VSC will complain.
```

`const` has a block scoop, which means if it's created inside of a pair of brackets, it only lives in there. If it's cerated at the top level of a JS-file, it lives inside the entire file.

```js
const firstName = "Niklas";
const lastName = "Johnsson";

if (true) {
  const lastName = "Svensson"; // A totally different variable, it's another scope.
  console.log(firstName); // Niklas
  console.log(lastName);
}

console.log(firstName); // Exists.
console.log(lastName); //Doesn't exist in this scope.
```

[Back to top](#2024-10-24-intro-to-javascript)

---

### let

This is the last keyword we can use in order to create variables. It is very similar to `const` but we are allowed to re-assign a `let`-variable.

```js
let streetName = "Tegelvägen";
streetName = "Drottninggatan"; // This is totally fine.
```

This is fine, but we can also change the data type if we would like to.

```js
let id = "jhkh77{123!";
id = 6788265; // Works just fine, the datatype doesn't matter.
```

Even though this is allowed, it's not recommended. Keep it clean, only one data type per variable.

[Back to top](#2024-10-24-intro-to-javascript)

---

## If Statements

An if statement is just a way for the application to decide which way to go. Simply put. Depending on certain conditions that we define, the application can do one thing or the other. Usually an application consists av hundreds of condition in different combinations, so it's an essential/fundamental tool to know about when coding.

What a statment means is also a good thing to know. It just means a set of instructions that the computer follows.

[Back to top](#2024-10-24-intro-to-javascript)

### Basic if-syntax

```js
if (condition) {
  // code to be executed if the condition is true.
}
```

`if` is the keyword that tells the compiler that an if check is declared. The condition is a value that cand be evaluated to either `true` or `false`. The code block contains the code that is execuded when the condition is `true`.

```js
const age = 20;

if (age > 18) {
  console.log("You are an adult.");
}
```

### if-else statement

This is fine, if we just want to check if the condition is `true`, but what if it's `false`? Maybe we want to handle that case as well. Let's look at the `else` keyword. Here is the basic syntax

```js
if (conditon) {
  // code to execute if condition is true
} else {
  // code to execute if the condition is false.
}
```

In this case and example, we want to console.log something if we are not above the age of 18.

```js
const age = 20;

if (age > 18) {
  console.log("You are an adult.");
} else {
  console.log("You are still classed as a minor.");
}
```

This is called an if-else statment. It is very common of course.

[Back to top](#2024-10-24-intro-to-javascript)

---

### Comparison operators

In order to evaluate our conditions we need tools for that, and they are called comparison operators. It's the characters that we use to compare the variables or whatever it is we are comparing.

#### greater then, or less then `>, <`

Operator to check if something is greater then, or less then. It's very straight forward.

[Back to top](#2024-10-24-intro-to-javascript)

#### greater than OR equal, less then OR equal `>=, <=`

Same as above but with the added possibility for the "terms", _( in lack of a better word )_, to be equal to eachother.

[Back to top](#2024-10-24-intro-to-javascript)

#### equal _( but NOT strict )_ `==`

The compare the two things to see if they are equal but not strict equal. It means that we can compare to values of different data types, and still get a `true` value. This is called equal with cohersion. It means that the editor or browser will try to convert one of the values to the other data type.

```js
"10" == 10; // => will be true

100 == "hundred"; // => will be false, since they don't have the same kind of value.
```

[Back to top](#2024-10-24-intro-to-javascript)

#### equal _( AND strict )_ `===`

Same as above but the values must be of the same data type.

```js
"10" === 10; // Will be false due to different data types.

10 === 10; // true.
```

In the majority of cases, always go for the strict equal comparison.

[Back to top](#2024-10-24-intro-to-javascript)

#### not equal _( NOT strict)_ `!=`

#### not equal _( AND strict)_ `!==`

[Back to top](#2024-10-24-intro-to-javascript)

---

### if-else-if statments

[Back to top](#2024-10-24-intro-to-javascript)

---

### Truthy and Falsy values

| Value                   | Type      | Truthy or Falsy |
| ----------------------- | --------- | --------------- |
| `false`                 | Boolean   | Falsy           |
| `0`                     | Number    | Falsy           |
| `-0`                    | Number    | Falsy           |
| `""` (empty string)     | String    | Falsy           |
| `null`                  | Object    | Falsy           |
| `undefined`             | Undefined | Falsy           |
| `NaN` (Not a Number)    | Number    | Falsy           |
| `true`                  | Boolean   | Truthy          |
| Non-zero numbers        | Number    | Truthy          |
| Non-empty strings       | String    | Truthy          |
| `{}` (empty object)     | Object    | Truthy          |
| `[]` (empty array)      | Object    | Truthy          |
| Arrays with content     | Object    | Truthy          |
| Objects with properties | Object    | Truthy          |

[Back to top](#2024-10-24-intro-to-javascript)

---

### Logical operators

#### `&&` - Logical AND

[Back to top](#2024-10-24-intro-to-javascript)

---

#### `||` - Logical OR

[Back to top](#2024-10-24-intro-to-javascript)

---

#### `!` - Logical NOT

[Back to top](#2024-10-24-intro-to-javascript)

---

#### `??` - Nullish Coalescing

[Back to top](#2024-10-24-intro-to-javascript)
