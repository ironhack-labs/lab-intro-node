class SortedList {
  constructor(items = [], length = items.length) {
    this.items = items;
    this.length = length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort( (a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    else {
      return this.items.indexOf(pos);
    }
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    else {
      return this.items.slice(-1);
    }
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    else {
      return this.items[0];
    }
  }

  sum() {
    let sum = 0;
    this.items.forEach( (element) => {
      sum += element;
    })
    return sum;
  }

  avg() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    else {
    let sum = 0;
    this.items.forEach( (element) => {
      sum += element;
    })
    return sum/this.length;
    }
  }
}

module.exports = SortedList;
