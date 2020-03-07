class SortedList {
  constructor(items) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort(function(a, b){return a-b});
    this.length = this.items.length;
  }

  get(pos) {
    if(pos >= this.items.length) {
      throw new Error("OutOfBounds");
    }
    return (this.items[pos]);
  }

  max() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items.reduce(function(a, b) {
      return Math.max(a, b);
    });
  }

  min() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items.reduce(function(a, b) {
      return Math.min(a, b);
    });
  }

  sum() {
    if(this.items.length === 0) {
      return 0;
    }
    return this.items.reduce(function(a, b) {
      return a + b;
    });
  }

  avg() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let sum = this.items.reduce(function(a, b) {
      return a + b;
    });
    return sum / this.length;
  }
}

module.exports = SortedList;
