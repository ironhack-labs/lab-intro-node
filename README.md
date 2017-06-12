![Ironhack Logo](https://i.imgur.com/1QgrNNw.png)

# JS | Introduction to Node

## Introduction

Today will be our first day using Node, and to practice we will create a Sorted List class. Ready to start?

## Requirements

- [Fork this repo](https://guides.github.com/activities/forking/)
- Clone this repo into your `~/code/labs`
- Make sure you use objects and prototypal inheritance during the exercise
- We should follow good object oriented principles

## Submission

- Upon completion, run the following commands

```
git add .
git commit -m "done"
git push origin master
```

- Navigate to your repo and [create a Pull Request](https://help.github.com/articles/creating-a-pull-request/)

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
starter-code/
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
    3) should add a second value to SortedList, sorted
    4) should add a third value to SortedList, sorted
  #get(i)
    ✓ should return an OutOfBounds exception if there is no element in that position
    5) should return the element in that position
  #max()
    ✓ should return an EmptyList exception if there is no element in the list
    6) should return the max element in the list
  #min()
    ✓ should return an EmptyList exception if there is no element in the list
    7) should return the min element in the list
  #average()
    ✓ should return an EmptySortedList exception if there are no elements
    8) should return the average of elements in the array
  sum()
    ✓ should return a EmptySortedList exception if there are no elements in the list
    9) should add(sum) all elements of the array if there are elements in the list


5 passing (17ms)
9 failing
```
Don't worry if these 5 tests are passing... your goal is to make them ALL PASS!! :)

## SortedList Class

The task here is to create a class that maintains a sorted list of numbers in ascending order.

The class will have the following methods:

### Constructor

`new SortedList` should create a new object from the `SortedList` class. The object should be empty to start

### Size

`size()` will return the number of elements in the `SortedList` Object

### Add

`add(x)` will add x to the list

### Get

get(i) will get the ith value in the list
You should also provide a length property that gives the length of the list.

### Max

### Min

### Average

### Sum


/Happy Coding
