class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => (a - b));
    this.length = this.items.length;
  }

  get(pos) {
    if(typeof this.items[pos] === 'undefined') { 
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList");
    } else {
      return Math.max( ...this.items)
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList");
    } else {
      return Math.min( ...this.items)
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((acc, val) => {
      return acc + val;
    },0);

  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
