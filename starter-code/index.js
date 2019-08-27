class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
  }
  get(pos) {
    try {
      if (pos > this.length - 1) {
        throw "OutOfBounds";
      } else {
        this.items = this.items.sort(function(a, b) {
          return a - b;
        });
        return this.items[pos];
      }
    } catch (error) {
      return "error";
    }
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let maximum = Math.max.apply(null, this.items);
      return maximum;
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let minimum = Math.min.apply(null, this.items);
      return minimum;
    }
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      let sum = this.items.reduce((acc, currv) => {
        return acc + currv;
      }, 0);
      return sum;
    }
  }
}

module.exports = SortedList;
