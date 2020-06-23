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
    this.pos = this.items[pos];
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    this.element = this.items;
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.element);
  }

  min() {
    this.element = this.items;
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.element);
  }

  sum() {
    this.element = this.items
    return this.element.reduce((accumulator, currentValue) => accumulator + currentValue, 0) 
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
