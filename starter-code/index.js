class SortedList {
  constructor(items, length) {
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
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos - 1];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      var max = this.items.reduce(function(a, b) {
        return Math.max(a, b);
      });

      return max;
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      var min = this.items.reduce(function(a, b) {
        return Math.min(a, b);
      });

      return min;
    }
  }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      var total = this.items.reduce(function(sum, current) {
        return sum + current;
      });
      return total / this.length;
    }
  }
  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      var total = this.items.reduce(function(sum, current) {
        return sum + current;
      });
      return total;
    }
  }
}

module.exports = SortedList;
