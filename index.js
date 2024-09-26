class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos in this.items) {
      return this.items[pos]
    } else {
      throw new Error ("OutOfBounds")
    }
  }

  max() {
    if (!this.items.length) {
      throw new Error ("EmptySortedList");
    } else {    
    let value = 0;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] > value) {
        value = this.items[i]
      }
    } return value
  } 
}

  min() {
    if (!this.items.length) {
      throw new Error ("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (!this.items.length) {
      return 0;
    } else {
      return this.items.reduce((acc, value) => acc + value)
    }
  }

  avg() {
    if (!this.items.length) {
      throw new Error ("EmptySortedList");
    } else {
      let total = this.items.reduce ((acc,value) => acc + value);
      return total / this.items.length;
    }
  }
}

module.exports = SortedList;