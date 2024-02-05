class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
  this.items.push(item);
  this.length += 1;
  this.items.sort((a,b) => a - b );
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList") 
    } else {
      this.items.sort((a,b) => a - b);
      return this.items[this.items.length - 1];
    }
  }

  min() {
    if (this.items.length === 0) {
    throw new Error("EmptySortedList") 
  } else {
    this.items.sort((a,b) => a - b);
    return this.items[0];
  }
}

  sum() {}

  avg() {}
}

module.exports = SortedList;
