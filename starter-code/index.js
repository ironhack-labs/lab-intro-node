class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    })
    this.length ++;
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[this.items.length -1];
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[0] 
    }
  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items.reduce((acc, current) => acc + current) / this.length;
    }
  }
  sum() {
    let summation = 0;
    for(let i = 0; i < this.items.length; i++) {
      summation += this.items[i];
    }
    return summation;
  }
};

module.exports = SortedList;

