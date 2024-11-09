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
    if (!this.items[pos]) {
      throw new Error('OutOfBounds')

    }
    return this.items[pos]
  }

  max() {
    if (!this.length) {
      throw new Error('OutOfBounds')

    }
    return Math.max(...this.items);
  }

  min() {

    if (!this.length) {
      throw new Error('OutOfBounds')

    }
    return Math.min(...this.items);
  
  }

  sum() {
    if (!this.length) {
      return 0;

    }
    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }

  avg() {
    if(this.sum() == 0) {
      throw new Error('OutOfBounds')

    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
