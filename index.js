class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if(!this.items[pos]) throw new Error('OutOfBounds');
    return this.items[pos]; 
  }

  max() {
    if (!this.length) throw new Error('EmptySortedList');
    return this.items[this.items.length - 1];
  }

  min() {
    if (!this.length) throw new Error('EmptySortedList');
    return this.items[0];
  }

  sum() {
    const sum = this.items.reduce((a, b) => a + b, 0);
    return sum;
  }

  avg() {
    if(!this.length) {
      throw new Error('EmptySortedList');
    }
    const avg = this.items.reduce((a, b) => a + b, 0) / this.length;
    return avg;
  }
}

module.exports = SortedList;
