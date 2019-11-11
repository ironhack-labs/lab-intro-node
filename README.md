![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Intro to Node.js

## Introduction

Today is our first day using Node.js, so we will practice doing some basic operations. **Ready to start?**

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```bash
  git add .
  git commit -m "Finished lab"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Testing - Introduction

This exercise will be completed through a series of tests. You should be familiar with testing from previous lessons and exercises, but just in case, here is a short recap of Intro to testing. :wink:

### What is testing?

_Software testing is a process of executing an application to validate and verify that it meets the business and technical requirements and works as expected._

Testing is a **process**, not a single activity. As early as we start developing and conducting tests, the better are chances that we can prevent deficiencies in the code or product design.

In this exercise, we have created all the tests you need to create the solution, and you have to execute them all and create the code to accomplish all the requirements.

Tests prove that your code actually works in every situation in which it’s designed to work. Even when you are improving the design or creating new features, you can change your current code without breaking what already works.

### Testing with Mocha

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_99e6ffece1023c0fe141512493fc6ad2.png)

[Mocha](https://mochajs.org/) is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.

<!-- Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. -->

We have already included Mocha in the project you just forked, so let's see how to use it to implement our code.

### Usage

To start using mocha, you have to install it as a **global package** in your system. Remember that we should always use the Node Package Manager (NPM) to manage all the packages in our projects.

We will do so by running:

```bash
$ npm install -g mocha
```

We can check that Mocha is correctly installed by running:

```bash
$ mocha --version
6.1.4
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

We are going to be working with the **`index.js`** file. Here we will write the implementation of our `SortedList` class.

The `test` folder contains all the tests we will execute with Mocha.

### Running the tests

Run the tests with Mocha is super easy, you just have to run `npm test`. Before you run this command, make sure you navigate to the `starter-code`.

```bash
$ npm test

> mocha

SortedList
  Constructor
    1) should create an empty SortedList
  #add(x)
    2) should add a single value to SortedList
    3) should add a third value to SortedList
  #load(i)
    4) should return an OutOfBounds exception if there is no element in that position
    5) should return the element in that position
  #add(x) and load(i)
    6) should add a second value to SortedList, sorted
    7) should add a third value to SortedList, sorted
  #max()
    8) should return an EmptySortedList exception if there is no element in the list
    9) should return the max element in the list
  #min()
    10) should return an EmptySortedList exception if there is no element in the list
    11) should return the min element in the list
  #sum()
    12) should return 0 for an empty sorted list
    13) should add(sum) all elements of the array if there are elements in the list
  #average()
    14) should return an EmptySortedList exception if there are no elements
    15) should return the average of elements in the array

  0 passing (13ms)
  15 failing
```

Don't worry if only no tests are passing... your goal is to make them **all pass**! :smile:

## SortedList Class

The task here is to create a class that maintains a sorted list of numbers in ascending order.

The class will have the following methods:

### constructor()

`new SortedList` should create a new object from the `SortedList` class.

The object should have an `items` and `length` property.

- `items` should be an array.
- `length` should be the number of elements in the array.

### add(item)

The `add` method should add the value `item` to the items array, while ensuring that the items array stays sorted in ascending order.

You might want to update the length property that returns the length of the list.

### load(pos)

The `load` method will get the value at index `pos` in the list.

Make sure you _throw_ an error with the message "OutOfBounds" if a user tries to get an element from a non-existing index (ex. _if the array has 5 elements and we are trying to get element on the position 12_).

To throw an error, you can do the following:

```js
throw new Error('OutOfBounds');
```

If you want more information about `try...catch`, you can go on the [Mozilla documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch).

### max()

The `max()` method should return the highest value of the array.

In the case you have an empty `SortedList`, you must throw an error with the message "EmptySortedList".

### min()

The `min()` method should return the lowest value of the array.

In the case you have an empty `SortedList`, you must throw an error with the message "EmptySortedList".

### sum()

The `sum()` method should return the sum value of the array.

At this point, we won't tell you anything else. Just go ahead and check the corresponding test and see if anything else needs to be added. You can do this! :heart:

### average()

The `average()` method should return the average value of the array.

Just as before, check the corresponding test to see if there's anything else that needs to be added.

And you reached the end!

Happy Coding! 💙
