class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }      
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }      
    return Math.min(...this.items);
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return [...this.items].reduce((curr, acc) => curr + acc);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    }
    let avgItemsValue = this.sum()/this.items.length;
    return avgItemsValue;
  }
}

module.exports = SortedList;
