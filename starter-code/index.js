class SortedList {
  constructor() {

    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }

  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() { 
    if (this.length === 0 ) {
      return this.items; 
    } else {
      return this.items.reduce((acc, cu) => acc += cu);
    }
  }

  avg() { 
    if (this.length === 0 ) {
      throw new Error("EmptySortedList"); 
    } else {
      return this.items.reduce((acc, cu) => acc += cu) / this.length;
    }
  }
}

module.exports = SortedList;
