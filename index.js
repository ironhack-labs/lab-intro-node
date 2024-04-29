class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos > this.items.length || pos < 0) {
      throw new Error("OutOfBounds");
    } else {
      return this.items.at(pos);
    }
  }

  max() { 
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      this.items.sort((a, b) => a -b);
      return this.items[this.length - 1];
    }
  }

  min() { 
    if (this.items.length === 0) {
      throw new Error("Empty SortedList")
    } else {
      this.items.sort((a, b) => a -b);
      return this.items[0];
    }
  }

  sum() { 
    let sum = 0;
    if (this.items.length === 0) {
      return 0;
    } else {
      this.items.forEach((num) => {
        sum = sum + num;
      })
    }
    return sum;
  }

  avg() { 
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      const sum = this.sum();
      return sum/this.length;
    }
  }
}

module.exports = SortedList;
