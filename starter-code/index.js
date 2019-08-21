
class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }
  get(pos) {
    return this.items[pos];
  }
  // 1) should return an EmptySortedList exception if there is no element in the list
  // 2) should return the max element in the list
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[this.items.length - 1]
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[0]
    }
  }
  // sum
  // 2) should return 0 for an empty sorted list
  // 3) should add(sum) all elements of the array if there are elements in the list
  // average
  // 4) should return an EmptySortedList exception if there are no elements
  //     5) should return the average of elements in the array

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return (this.items.reduce((prev, curr) => prev + curr)) / this.length;
    }
  }
  sum() {
    if (this.length === 0) {
      return 0
    } else {
      return this.items.reduce((prev, curr) => prev + curr);
    }
  }
};

module.exports = SortedList;