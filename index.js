class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => {
      return a - b;
    });
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) throw new Error("OutOfBounds");
    return this.items[pos];
  }

  max() {
    if (!this.items.length) throw new Error("EmptySortedList");
    // because of the sorting the array, we can return easily the last element, which will be the highest value of the array
    return this.items[this.items.length - 1];
    // *** another approach, when we don't sort the array in ascending order:
    // *** with reduce() can be used to find the maximum element in a numeric array, by comparing each value
    // return this.items.reduce((a, b) => Math.max(a, b));
    // *** another approach, but this should only be used for arrays with relatively few elements
    // *** both spread (...) and apply() will either fail or return the wrong result if the array has too many elements,
    // *** because they try to pass the array elements as function parameters.
    // *** The reduce solution does not have this problem.
    // return Math.max(...this.items);
  }

  min() {
    if (!this.items.length) throw new Error("EmptySortedList");
    // *** because of the sorting the array, we can return easily the first element, which will be the lowest value of the array
    return this.items[0];
    // *** another approach, when we don't sort the array in ascending order:
    return this.items.reduce((a, b) => Math.min(a, b));
  }

  sum() {
    // if (!this.items.length) return 0;
    // because of initialValue = 0, we don't need the first line
    return Number(this.items.reduce((a, b) => a + b, 0));
  }

  avg() {
    if (!this.items.length) throw new Error("EmptySortedList");
    return Number(this.sum() / this.items.length);
  }
}

module.exports = SortedList;
