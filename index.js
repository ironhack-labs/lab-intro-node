class SortedList {

  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }
  

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if(!this.items[pos]) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos]
    }
  }

  max() {
    if(!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if(!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    let sum = 0;
    for(let i = 0; i < this.length; i++) {
      sum = sum + this.items[i];
    }
    return sum;
  }

  avg() {
    if(!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
