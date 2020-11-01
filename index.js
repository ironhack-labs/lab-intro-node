class SortedList {
  constructor() {
    this.items = [],
    this. length = this.items.length;

  }

  add(item) {
    this.items.push(item)
    this. length = this.items.length
    this.items.sort((a, b)=>{return a-b});
  }
//The get(pos) method will get the value at index pos in the list.
// Example: if an instance of SortedList has elements: [2, 5, 7], when get(2) called, return should be 7 since this is element in that position in the array. Check the tests to see more examples.
//
// In addition, make sure you throw an error with the message OutOfBounds if a user tries to get an element in the non-existing position (e.g. if the array has 5 elements and we are trying to get the element on the position 7).
  get(pos) {
    return this.items.indexOf(pos)

  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;

// let list = new SortedList;
// list.add(1)
// list.add(1)
// list.add(1)
// console.log(list.length);
