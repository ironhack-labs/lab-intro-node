class SortedList {
  constructor () {
    this.items = [];
    this.length = this.items.length;
  }

  add (item) {
    this.items.push(item);
    this.items.sort((a, b) => (a - b));
    this.length = this.items.length;
  }

  get (pos) {
    return this.items[pos - 1];
  }

  max () {
    return Math.max(...this.items);
  }

  min () {
    return Math.min(...this.items);
  }

  average () {
    return this.sum() / this.items.length;
  }

  sum () {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i];
    }
    return sum;
  }
}

module.exports = SortedList;
