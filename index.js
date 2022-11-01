class SortedList {
  constructor(items, length) {
    items = [];
    this.items = items;
    this.length = items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((function (a, b) { return a - b }));
    this.length++;
  }

  get(pos) {
    for (let index = 0; index < this.items.length; index++) {
      if (pos <= this.items.length) {
        let element = this.items[pos];
        return element;
      }
      else if (pos > this.items.length) {
        throw new Error('OutOfBounds');
      }
    }
  }

  max() {
    if (this.items.length > 0) {
      let maxValue = Math.max(...this.items);
      return maxValue;
    }
    else if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length > 0) {
      let minValue = Math.min(...this.items);
      return minValue;
    }
    else if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    }
  }

  sum() {
    let sum = 0;
    if (this.items.length > 0) {
      for (let index = 0; index < this.items.length; index++) {
        sum += this.items[index];
      }
      return sum;
    }
    else if (this.items.length === 0) {
      return 0;
      throw new Error('EmptySortedList');
    }
  }

  avg() {
    let sum = 0;
    if (this.items.length > 0) {
      for (let index = 0; index < this.items.length; index++) {
        sum += this.items[index];
      }
      return sum / this.items.length;
    }
    else if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
