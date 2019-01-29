class SortedList {
  constructor () {
    this.items = [];
    this.length = this.items.length;
  }
  add (item) {
    this.items.push (item);
    this.items.sort (function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }
  get (pos) {
    return this.items[pos - 1];
  }
  max () {
    if (this.items.length > 0) {
      return Math.max.apply (null, this.items);
    } else {
      throw new Error ('EmptySortedList');
    }
  }
  min () {
    if (this.items.length > 0) {
      return Math.min.apply (null, this.items);
    } else {
      throw new Error ('EmptySortedList');
    }
  }
  average () {
    if (this.items.length > 0) {
      return this.sum () / this.items.length;
    } else {
      throw new Error ('EmptySortedList');
    }
  }
  sum () {
    if (this.items.length > 0) {
      return this.items.reduce (function (a, b) {
        return a + b;
      });
    } else {
      return 0;
    }
  }
}

module.exports = SortedList;
