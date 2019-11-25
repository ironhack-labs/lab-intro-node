![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Intro to Node

## Introduction

Today is our first day using Node, so we will practice doing some basic operations. **Ready to start?**

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

## Testing - Introduction

This exercise will be completed through a series of tests. You should be familiar with testing from previous lessons and exercises, but just in case, here is a short recap of Intro to testing. :wink:

### What is testing?

_Software testing is a process of executing an application to validate and verify that it meets the business and technical requirements and works as expected._

Testing is a **process**, not a single activity. As early as we start developing and conducting tests, the better are chances that we can prevent deficiencies in the code or product design.

In this exercise, we have created all the tests you need to create the solution, and you have to execute them all and create the code to accomplish all the requirements.

Tests prove that your code actually works in every situation in which it’s designed to work. Even when you are improving the design or creating new features, you can change your current code without breaking what already works.

### Testing with Mocha

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_99e6ffece1023c0fe141512493fc6ad2.png)

[Mocha](https://mochajs.org/) is a feature-rich JavaScript testing framework running on Node.js and in the browser, making asynchronous testing simple and fun.

<!-- Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. -->

We have already included Mocha in the project you just forked, so let's see how to use it to implement our code.

### Usage

To start using mocha, you have to install it as a dependency for this project. Remember that we should always use the Node Package Manager (npm) to manage all the packages in our projects.

**Navigate to the `starter-code`** and then run the following command:

```
$ npm install mocha
```

After this step, we will see `dependencies` in the _package.json_ and mocha will be there.

_Note_: The current version of mocha is 6.2.2.

## Project Structure

Before we start coding, let's explain the provided project structure:

```
starter-code/
├── test
│   └── index.spec.js
└─ package.json
└─ index.js
```

We are going to be working with the **`index.js`** file. Here we will write the implementation of our `SortedList` class.

The `test` folder contains all the tests we will execute with Mocha.

### Running the tests

Running our tests with Mocha is super easy; you just have to run `npm test`. Before you run this command, make sure you navigate to the `starter-code` directory.

```
$ npm test

> lab-intro-node@1.0.0 test /Users/Sandra/Desktop/iron-labs/lab-intro-node/starter-code
> mocha


  SortedList
    Constructor
      1) should have items and length properties
    #add(x)
      2) should add a single value to SortedList
      3) should add a third value to SortedList
      4) should add a value while keeping the list sorted
    #get(i)
      5) should return an OutOfBounds exception if there is no element in that position
      6) should return the element in that position
    #max()
      7) should return an EmptySortedList exception if there is no elements in the list
      8) should return the max (highest) value in the list
    #min()
      9) should return an EmptySortedList exception if there are no elements in the list
      10) should return the min (lowest) value in the list
    #sum()
      11) should return the sum of all elements in the list
      12) should return 0 for an empty sorted list
    #avg()
      13) should return an EmptySortedList exception if there are no elements
      14) should return the average of elements in the list

  0 passing (13ms)
  14 failing
```

Don't worry that none of the tests are passing... you will make them ALL PASS!! :smile:

## Instructions

The task here is to create a class that maintains a **sorted list of numbers in ascending order**.

Go in the `index.js` file and there you will find the bare bones of the _SortedList_ class.

The **SortedList** class will have the following methods:

### Iteration 1: constructor()

`new SortedList` should create a new object from the `SortedList` class.

The object should have two properties: `items` and `length`.

- `items` should be an array,
- `length` should be the number of elements in the array.

### Iteration 2: add(item)

The `add(item)` method should add the value `item` to the items array, ensuring that **the items array stays sorted in ascending order**.
What does this mean? Well, if an array of items has these elements: `[2, 5, 7]`, and if `6` is added, the array of items should be as follows: `[2, 5, 6, 7]`.

Here you should also make sure that the length property gets updated accordingly when new items are added to the list.

### Iteration 3: get(pos)

The `get(pos)` method will get the value at index `pos` in the list. <br>
_Example_: if an instance of SortedList has elements: [2, 5, 7], when `get(2)` called, return should be `7` since this is element in that position in the array. Check the tests to see more examples.

In addition, make sure you _throw_ an error with the message _OutOfBounds_ if a user tries to get an element in the non-existing position (e.g. _if the array has 5 elements and we are trying to get the element on the position 7_).

To throw an error, you can do the following:

```js
throw new Error("OutOfBounds");
```

<!-- ### Iteration 4: make that list sorted!

Up to this moment, in the `add(item)` method we were just adding elements in the array of _items_. Our ultimate goal is to make this array _sorted in ascending order_. <br>
What does this mean? Well, if array of items has these elements: [2, 5, 7], if `6` is added, the array of items should be as follows: [2, 5, 6, 7]. See the failing tests for more examples and details. -->

### Iteration 4: max()

The `max()` method should return the highest value of the array.

In case you have an empty `SortedList`, you must throw an error with the message "EmptySortedList". For this, you can use:

```js
throw new Error("EmptySortedList");
```

### Iteration 5: min()

The `min()` method should return the lowest value of the array.

In case you have an empty `SortedList`, you must throw an error with the message "EmptySortedList".

## Bonus iterations

### Iteration 6: sum()

The `sum()` method should return the sum value of the array. At this point, we will not tell you anything else. Just go ahead and check the corresponding test and see if anything else needs to be added. You can do this! :heart:

### Iteration 7: avg()

The `avg()` method should return the average value of the array.

Just as before, check the corresponding test to see if there's anything else that needs to be added.

And you reached the end!

Happy Coding! :heart:
