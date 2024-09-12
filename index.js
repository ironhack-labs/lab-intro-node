// The task here is to create a class that maintains a sorted list of numbers in ascending order.

// Go in the index.js file and there you will find the bare bones of the SortedList class.

// The SortedList class will have the following methods:

// Iteration 1: constructor()
// new SortedList should create a new object from the SortedList class.

// The object should have two properties: items and length.

// items should be an array,
// length should be the number of elements in the array.
// I need to update lenght with the items.lenght

class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

// The get(pos) method will get the value at index pos in the list.
// Example: if an instance of SortedList has elements: [2, 5, 7], when get(2) called, return should be 7 since this is element in that position in the array.
  get(pos) {

    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos];
  }

  max() {
    // const sortList = this.items.sort();

    if (this.items.sort() == 0) {
      throw new Error("EmptySortedList");
    }

    return Math.max.apply(0, this.items);
    
  }

  min() {
    if (this.items.sort() == 0) {
      throw new Error("EmptySortedList");
    }

    return Math.min.apply(0, this.items);
  }

  // The sum() method should return the sum value of the array. 

  sum() {
    
    // this.sum = 0;

    if(this.items.length === 0) {
      return 0;
    } else {

      this.sum = 0;

      for (let i = 0; i < this.items.length; i++){

        this.sum += this.items[i];
      }
    }

    return this.sum

  }

  // The avg() method should return the average value of the array.

  avg() {

    if (this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    
      return this.sum()/this.items.length;
  }
}

module.exports = SortedList;
