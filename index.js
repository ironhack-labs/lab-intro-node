class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos <= this.items.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
    
  }
    
  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.items.length <= 0) {
      return 0
    }
    
    return this.items.reduce((acc, currentNum) => {
      return acc + currentNum
    }, 0)
    
  }

  avg() {
    if (this.items.length <= 0) {
      throw new Error("EmptySortedList");
    }
    const sum = this.items.reduce((acc, currentNum) => {
      return acc + currentNum
    }, 0);

    return sum / this.items.length;
  }
}

module.exports = SortedList;
