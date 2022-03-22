class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length) throw new Error('OutOfBounds');
    else return this.items[pos]
  }

  max() {
    if (!this.length) throw new Error('EmptySortedList');
    else return Math.max(...this.items);
  }

  min() {
    if (!this.length) throw new Error('EmptySortedList');
    else return Math.min(...this.items);
  }

  sum() {
    if (!this.length) return 0;
    const sumArray = this.items.reduce((a, b) => {
      return a + b;
    });

    return sumArray;
  }

  avg() {
    if (!this.length) throw new Error('EmptySortedList');
    const avaArray = this.items.reduce((a, b) => {
      return a + b / this.length;
    }, 0);
    return avaArray;
  }
}

module.exports = SortedList;