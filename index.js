class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (!this.items[pos]) {
      // console.log(this.items[pos]);
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(!this.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if(!this.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    let sum = this.items.reduce((a,b) => a + b, 0)
    return sum;
  }

  avg() {
    if(!this.length) {
      throw new Error('EmptySortedList');
    } else {
      let avg = this.sum()/this.length;
      return avg
    }
  }
}

module.exports = SortedList;
