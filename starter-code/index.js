class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    const arrLength = this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = arrLength;
    return this.items;
  }

  get(pos) {
    if(typeof this.items[pos] === 'undefined') {
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }

  max() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length - 1];
  }

  min() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0]
  }

  sum() {
    return this.items.reduce((a, e) => {return a + e}, 0)
  }

  avg() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }

}

module.exports = SortedList;