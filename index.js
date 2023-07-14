class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    function compare(a, b) {
      return a - b;
    }
    this.items.sort(compare);
    // Este tambien nos valdría
    // this.min(this.items);
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    function compare(a, b) {
      return b - a;
    }
    if (this.items.length > 0) {
      this.items.sort(compare);
      return this.items[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    function compare(a, b) {
      return a - b;
    }
    if (this.items.length > 0) {
      this.items.sort(compare);
      return this.items[0];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    const sum = this.items.reduce((ac, valueAc) => {
      return ac + valueAc;
    }, 0);
    return sum;
  }

  avg() {
    if (this.items.length > 0) {
      return this.sum(this.items) / this.items.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
