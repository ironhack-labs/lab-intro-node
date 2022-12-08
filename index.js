class SortedList {
  constructor() {
    (this.items = []), (this.length = 0);
  }

  add(item) {
    // if (!this.items.length) this.items.push(item);
    this.items.push(item);
    this.lenght++;
    this.items.sort((a, b) => {
      a - b;
    });
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) throw new Error("OutOfBounds");
    return this.items[pos];
  }

  max() {
    if (!this.items.length) throw new Error("EmptySortedList");
    // with reduce() can be used to find the maximum element in a numeric array, by comparing each value
    return this.items.reduce((a, b) => Math.max(a, b));
    // another approach, but this should only be used for arrays with relatively few elements
    //both spread (...) and apply() will either fail or return the wrong result if the array has too many elements,
    // because they try to pass the array elements as function parameters.
    //The reduce solution does not have this problem.
    // return Math.max(...this.items);
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
