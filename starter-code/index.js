class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      if (a === b) {
        return 0;
      }
    });
    this.length += 1;

  }

  get(pos) {
    if (pos < (this.length - 1) && pos > 0) {
      throw new Error("OutOfBounds");
    }
    else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      return this.items.reduce(function (a, b) {
        return Math.max(a, b);
      })
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      return Math.min(...this.items)
    }
  }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    else{
      let sum = 0;
      for (let i = 0; i < this.length; i += 1) {
        sum += this.items[i];
      }
      return sum / this.length;
    }
  }
  sum() {
    if (this.length === 0) {
      return 0;
    }
    else {
      let sum = 0;
      for (let i = 0; i < this.length; i += 1) {
        sum += this.items[i];
      }
      return sum;
    }
  }
};


module.exports = SortedList;