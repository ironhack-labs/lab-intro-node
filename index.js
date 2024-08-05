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
    if (pos < 0 || pos >= this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
   return this.items.reduce((a, b) => { return Math.max(a, b) });
  }

  min() {
  return this.items.reduce((a, b) => { return Math.min(a, b) });
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    const sum = this.items.reduce((acc, cur) => acc + cur);
    const average = sum/this.length;
    return average
  }
}

module.exports = SortedList;
