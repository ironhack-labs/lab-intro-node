class SortedList {
  //   Iteration 1: constructor()
  // new SortedList should create a new object from the SortedList class.

  // The object should have two properties: items and length.

  // items should be an array,
  // length should be the number of elements in the array.
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  // Iteration 2: add(item)
  // The add(item) method should add the value item to the items array, ensuring that the items array stays sorted in ascending order.
  // What does this mean? Well, if an array of items has these elements: [2, 5, 7], and if 6 is added,
  // the array of items should be as follows: [2, 5, 6, 7].

  // Here you should also make sure that the length property gets updated accordingly when new items are added to the list.

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
    // console.log(this.items);
    // console.log(this.length);
    // console.log(this.items.length);
  }

  // Iteration 3: get(pos)
  // The get(pos) method will get the value at index pos in the list.
  // Example: if an instance of SortedList has elements: [2, 5, 7], when get(2) called,
  // return should be 7 since this is element in that position in the array. Check the tests to see more examples.

  // In addition, make sure you throw an error with the message "OutOfBounds" if a user tries to get an element
  // in the non-existing position (e.g. if the array has 5 elements and we are trying to get the element on the position 7).

  // To throw the error (aka exception), you should do the following:

  // throw new Error("OutOfBounds");
  // should return the element in that position

  get(pos) {
    if (pos < 0 || pos >= this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  // Iteration 4: max()
  // The max() method should return the highest value of the array.

  // In case you have an empty SortedList, you must throw an error with the message "EmptySortedList". For this, you can use:

  // throw new Error("EmptySortedList");
  //  should return the max (highest) value in the list

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  // Iteration 5: min()
  // The min() method should return the lowest value of the array.

  // In case you have an empty SortedList, you must throw an error with the message "Empty SortedList".

  min() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList");
    }
    return this.items[0];
  }

  // Iteration 6: sum()
  // The sum() method should return the sum value of the array. At this point, we will not
  // tell you anything else. Just go ahead and check the corresponding test and see if anything else needs to be added.
  // You can do this! ❤️

  sum() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i];
    }
    return sum;
  }

  // Iteration 7: avg()
  // The avg() method should return the average value of the array.

  // Just as before, check the corresponding test to see if there's anything else that needs to be added.

  // And you have reached the end!

  avg() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList");
    }
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i];
    }
    return sum / this.items.length;
  }
}

module.exports = SortedList;
