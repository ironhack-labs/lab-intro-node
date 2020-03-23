class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;

  }
  add(item) {
    //  return this.items.sort((a, b) => a - b).push(item);
    this.length = this.items.push(item)
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
if (this.length !== 0) {
  return this.items[this.length -1];
} else {
  throw new Error("EmptySortedList");
}
  
  }

  min() {
    if (this.length !== 0) {
      return this.items[0];
    } else {
      throw new Error("EmptySortedList");
    }

  }

  sum() {
    if (this.length > 0) {
    return this.items.reduce((a, b) => a + b);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.length > 0) {
      return this.items.reduce((a, b) => a + b) / this.length;
      } else {
        throw new Error("EmptySortedList");
      }
  }
}

module.exports = SortedList;

const list = new SortedList;