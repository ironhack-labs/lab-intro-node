class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => (a - b));
  }

  get(pos) {
    throw new Error("OutOfBounds");
  }

  max() {
    throw new Error("EmptySortedList"); 
  }

  min() {
    return this.items.sort((a, b) => (a - b))[0]; 
  }

  sum() {
    if (this.length !== 0) {
      return this.items.reduce((total, acc) => total + acc);
    }
  }

  avg() {
    
  }
}

module.exports = SortedList;
