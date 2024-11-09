class SortedList {
  constructor() {                            // 1) should have items and length properties
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);                   // 2) should add a single value to SortedList
    this.items.sort((a, b) => a - b);        // 3) should add a third value to SortedList
    this.length = this.items.length;         // 4) should add a value while keeping the list sorted
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {     // 5) should return an OutOfBounds exception if there is no element in that position
      throw new Error("OutOfBounds");
    }
    return this.items[pos];                  // 6) should return the element in that position
  }

  max() {
    if (this.length === 0) {                 // 7) should throw an Empty SortedList error if there are no elements in the list
      throw new Error("EmptySortedList");
    }
    return this.items[this.length - 1];      // 8) should return the max (highest) value in the list
  }

  min() {
    if (this.length === 0) {                 // 9) should return an EmptySortedList exception if there is no elements in the list
      throw new Error("EmptySortedList");
    }
    return this.items[0];                    // 10) should return the min (lowest) value in the list
  }

  sum() {
    return this.items.reduce((accumulator, value) => accumulator + value, 0);   // 11) should return the sum of all elements in the list
  }                                                                             // 12) should return 0 for an empty sorted list

  avg() {
    if (this.length === 0) {                 // 13) should return an EmptySortedList exception if there are no elements
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;        //  14) should return the average of elements in the list
  }
  }

module.exports = SortedList;