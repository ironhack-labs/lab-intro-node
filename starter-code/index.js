class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a, b) {
      return a - b;
    });
  }
  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else return this.items[pos];
  }
  max() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort(function(a, b) {
        return a - b;
      });
      return this.items[this.items.length - 1];
    }
  }
  min() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      this.items.sort(function(a, b) {
        return a - b;
      });
      return this.items[0];
    }
  }
  average() {
    var result = 0;
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      for (i = 0; i < this.items.length; i++) {
        result += this.items[i];
      }
    }
    return result / this.items.length;
  }
  sum() {
    var result = 0;
    if (this.items.length == 0) {
      return [];
    } else {
      for (i = 0; i < this.items.length; i++) {
        result += this.items[i];
      }
    }
    return result;
  }
}

module.exports = SortedList;
