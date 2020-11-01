class SortedList {
  constructor() {
    this.items = [],
      this.length = this.items.length;

  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a, b) => {
      return a - b
    });
  }
  // will get the value at index pos in the list.: if an instance of SortedList has elements: [2, 5, 7], when get(2) called, return should be 7 since this is element in that position in the array. Check the tests to see more examples.
  get(pos) {
    let res = ""
    if (pos > this.items.length) {
      res = 'OutOfBounds'
      throw new Error('OutOfBounds');

    } else {

      res = this.items[pos]
    }
    // In addition, make sure you throw an error with the message OutOfBounds if a user tries to get an element in the non-existing position (e.g. if the array has 5 elements and we are trying to get the element on the position 7).

    return res

  }
  //The max() method should return the highest value of the array.
  max() {
    // let res = ""
    // In case you have an empty SortedList, you must throw an error with the message "EmptySortedList". For this, you can use:
    if (this.items.length === 0) {
      // throw new Error('EmptySortedList');


    } else {

      return this.items[this.items.length - 1]
    }
    // return res
  }

//The min() method should return the lowest value of the array.
  min() {
    // In case you have an empty SortedList, you must throw an error with the message "EmptySortedList".
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {

      return this.items[0]
    }

  }
// The sum() method should return the sum value of the array.
  sum() {

    return this.items.reduce((a, b) => a + b, 0)
  }
//The avg() method should return the average value of the array.
  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum()/this.items.length

    }
  }
}

module.exports = SortedList;

let list = new SortedList;
// list.add(2)
// list.add(5)
// list.add(7)
// list.add(7)


console.log(list.max());
