class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    // * add the value item to the items array
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    // * length property gets updated accordingly
    this.length = this.items.length;
  }3

  get(pos) {
    if (this.items.length >= pos) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length > 0) {
      // * At this position, we will see the biggest number thanks to the order that we did at line 10.
      let maxValue = this.items[this.items.length - 1];
      return maxValue;
    } else if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length > 0) {
      // * At this position, we will see the min number thanks to the order that we did at line 10.
      return this.items[0];
    } else if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    // * Initial value of zero to add with a gor loop
    let sum = 0;
    if (this.items.length > 0) {
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i];
      }
      return sum;
      // * If we dont have any numbers, just return 0
    } else if (this.items.length === 0) {
      return 0;
    }
  }

  avg() {
    if (this.items.length > 0) {
      return this.sum() / this.items.length;
    } else if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
