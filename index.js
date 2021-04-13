class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item); // Half working in NPM test
    this.items.sort(); // Not working in NPM test
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    } else if (pos < 0) {
      throw new Error('OutOfBounds');
    } else return this.items[pos]; // Not working in NPM test
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else return Math.max(...this.items); // Not working in NPM test
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else return Math.min(...this.items); // Not working in NPM test
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else for (let i = 0; i < this.length; i++) {
      let arraySum = 0;
      return arraySum += this.items[i]; // Not working in NPM test
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else for (let i = 0; i < this.length; i++) {
      let arraySum = 0;
      return arraySum += this.items[i] / this.items.length; // Not working in NPM test
    }
  }
}

module.exports = SortedList;
