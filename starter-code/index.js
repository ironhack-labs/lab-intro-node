// jshint esversion: 6

class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let index;
    for (index = 0; index < this.length; index++) {
      if (this.items[index] >= item) {
        break;
      }
    }
    this.items.splice(index, 0, item);  
    this.length++;
  }

  get(pos) {
    if (pos >= 0 && pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
