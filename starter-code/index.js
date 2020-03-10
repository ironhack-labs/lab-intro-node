class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    this.items.indexOf(pos);
    if (this.items.indexOf(pos) === -1) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      return EmptySortedList;
    } else {
      let max = Math.max(...this.items);
      return max;
    }
  }

  min() {
    if (this.length === 0) {
      return EmptySortedList;
    } else {
      let max = Math.min(...this.items);
      return max;
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      let total = this.items.reduce(function(a, b) {
        return a + b;
      });
      return total;
    }
  }

  avg() {
    if (this.length === 0) {
      return EmptySortedList;
    } else {
      let total = this.items.reduce(function(a, b) {
        return a + b;
      });
      return total / this.items.length;
    }
  }
}

module.exports = SortedList;
