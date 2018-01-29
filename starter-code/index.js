class SortedList {
  constructor () {
    this.items = [];
    this.length = this.items.length;
  }

  add (item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get (i) {
    if (i <= this.length && i >= 0) {
      return this.items[i - 1];
    }
  }

  max () {
    return Math.max(...this.items);
  }

  min () {
    return Math.min(...this.items);
  }

  average () {
    if (this.length === 0) {
      return this.items;
    } else {
      const sum = this.items.reduce((acc, currentValue) => acc + currentValue);
      return sum / this.length;
    }
  }

  sum () {
    if (this.length === 0) {
      return this.items;
    } else {
      return this.items.reduce((acc, currentValue) => acc + currentValue);
    }
  }
}

module.exports = SortedList;
