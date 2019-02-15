![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Intro to NodeJS

## Introduction

Today is our first day using NodeJS, so we will practice doing some basic operations. **Ready to start?**

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.


## Testing Introduction

This exercise will be completed through a series of tests. You should be familiar with testing from previous lessons, but if you aren't, here is a kind Introduction to testing :)

### What is testing?

Software testing is a process of executing an application to validate and verify that it meets the business and technical requirements and works as expected.

Testing is a process, not a single activity. So the process of designing tests early at the beginning of the development and the product's life-cycle can help to prevent deficiencies in the code or product design.

In this exercise, we have created all the tests you need to create the solution, and you have to execute them all and create the code to accomplish all the requirements.

Tests prove that your code actually works in every situation in which it’s designed to work. Even when you are improving the design or creating new features, you can change your current code without breaking what already works.

### Testing with Mocha

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_99e6ffece1023c0fe141512493fc6ad2.png)

[Mocha](https://mochajs.org/) is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.

Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

We have already included Mocha in the project you just forked, so let's see how to use it to implement our code.

### Usage

To start using mocha, you have to install it as a **global package** in your system. Remember that we should always use the Node Package Manager (NPM) to manage all the packages in our projects.

We will do so by running:

```
$ npm install -g mocha
```

We can check that Mocha is correctly installed by running:

```
$ mocha --version
3.4.2
```

## Project Structure

Before start coding, we will explain the provided project structure:

```
├── test
│   └── test.js
└─ package.json
└─ index.js
```

We are going to be working with the `index.js` file. Here we will write the implementation of our `SortedList` class.

The `test` folder contains all the tests we will execute with Mocha.

### Running the tests

Run the tests with Mocha is super easy, you just have to run `npm test`.

```
$ npm test

> lab-intro-node@1.0.0 test ~~/lab-intro-node/starter-code
> mocha

SortedList
  Constructor
    1) should create an empty SortedList
  #add(x)
    2) should add a single value to SortedList
    3) should add a third value to SortedList
  #get(i)
    ✓ should return an OutOfBounds exception if there is no element in that position
    4) should return the element in that position
  #add(x) and get(i)
    5) should add a second value to SortedList, sorted
    6) should add a third value to SortedList, sorted
  #max()
    ✓ should return an EmptyList exception if there is no element in the list
    7) should return the max element in the list
  #min()
    8) should return an EmptyList exception if there is no element in the list
    9) should return the min element in the list
  #sum()
    10) should return 0 for an empty sorted list
    11) should add(sum) all elements of the array if there are elements in the list
  #average()
    12) should return an EmptySortedList exception if there are no elements
    13) should return the average of elements in the array

2 passing (16ms)
13 failing
```
Don't worry if these 2 tests are passing... your goal is to make them ALL PASS!! :)

## SortedList Class

The task here is to create a class that maintains a sorted list of numbers in ascending order.

The class will have the following methods:

### Constructor

`new SortedList` should create a new object from the `SortedList` class.

The object should have a `items` and `length` property.

- `items` should be an array.
- `length` should be the number of elements in the array.

### Add

The `add(x)` method will add `x` to the items array.
In order to pass the first test `add(x)` you need to implement the `get(i)` method.

### Get

The method will get the `nth` value in the list.

In `get(i)` method it starts counting position as if 1 were 0.

You should also provide a length property that gives the length of the list.

### Max

The `max()` method should return the highest value of the array.

In the case you have an empty `SortedList`, you must throw an error with the message "EmptySortedList". For this, you can use:

```js
throw new Error("EmptySortedList")
```

If you want more information about `try...catch`, you can go on the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch).

### Min

The `min()` method should return the lowest value of the array.

In the case you have an empty `SortedList`, you must throw an error with the message "EmptySortedList".

### Sum

The `sum()` method should return the sum value of the array.

### Average

The `average()` method should return the average value of the array.

In the case you have an empty `SortedList`, you must throw an error with the message "EmptySortedList".



Happy Coding! :heart:
