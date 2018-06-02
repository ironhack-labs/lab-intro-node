class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.sort();
  }

  get(pos) {
    return this.items[pos - 1];
    // this.length;
  }

  max() {
    return this.items.pop();
  }

  min() {
    return this.items[0];
  }

  average() {
    return this.sum() / this.length;
  }
  
  sum() {
    return this.items.reduce((a, b) => {
      return a + b;
    }, 0);
  }

  sort() {
    this.items.sort((a, b) => a - b);
  }
}

module.exports = SortedList;

