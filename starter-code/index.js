class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    function compareFunction(a, b) {
      if (a > b) {
        return 1;
      } else if (b > a) {
        return -1;
      } else {
        return 0;
      }
    }
    this.items.sort(compareFunction);
  }

  get(pos) {
    if (this.items[pos]) {
      // return OutOfBounds;
      return this.items[pos];
    }
    throw new Error("OutOfBounds");
  }

  max() {
    //this if might be wrong
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    //this if might also be wrong
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    //
  }

  avg() {}
}

module.exports = SortedList;
