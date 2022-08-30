class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b)
    this.length = this.items.length;
  }

  get(pos) {
    if (pos <= this.length - 1) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if (this.length > 0) {
      return this.items[this.length - 1]
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length > 0) {
      return this.items[0]
    } else {
      throw new Error('EmptySortedList')
    }
  }

  sum() {
    let sum;
    this.length > 0 ?  sum = this.items.reduce((a,b) => a+b) : sum = 0
    return sum
  }

  avg() {
    if (this.length === 0) return new Error(EmptySortedList)
    let avg = this.sum() / this.length
    return avg
  }
}

module.exports = SortedList;
