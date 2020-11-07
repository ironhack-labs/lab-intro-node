class SortedList {
  constructor(items = []) {
    this.items = items;
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    if (this.length > 1) {
      this.items.sort((a, b) => a - b);
    }
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error('OutOfBounds');
    } 
      
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    return this.items.reduce((acc, value) => {
      return acc + value;
    }, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.sum() / this.length;
  }
}

module.exports = SortedList;
