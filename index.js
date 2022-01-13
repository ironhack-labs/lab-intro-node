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
    if (pos > this.length) {
      throw new Error('OutOfBounds');
    } else {
    return this.items[pos];
    }
  }

  max() {
    if (this.length <= 0) {
      throw new Error('EmptySortedList');
    }
    else {
      let highToLowList = [...this.items];
      highToLowList.sort((a, b) => b - a);
      return highToLowList[0]
    }
  }

  min() {
    if (this.length <= 0) {
      throw new Error('EmptySortedList');
    }
    else {
      return this.items[0]
    }
  }

  sum() {
    if (this.length <= 0) {
      return 0;
    }
    let result = this.items.reduce((pv, cv) => pv + cv);
    return result;
  }

  avg() {
    if (this.length <= 0) {
      throw new Error('EmptySortedList');
    }
    let result = this.items.reduce((pv, cv) => pv + cv);
    return result / this.items.length;
  }
}

module.exports = SortedList;
