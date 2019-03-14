class SortedList {
  constructor() {
    this.items = []
  }

  get length() {
    return this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
  }
  
  get(pos) {
    pos--;
    return this.items[pos];
  }
  
  max() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length - 1];
    }
  }
  
  min() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }
  
  average() {
    if (this.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.length;
    }
  }
  
  sum() {
    return (this.length == 0) ? 0 : this.items.reduce((acc, val) => acc + val);
  }
};

module.exports = SortedList;