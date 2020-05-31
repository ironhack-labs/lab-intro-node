class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }
    
  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.pop();
    }
  }

  min() {
    if (this.length === 0) {
      throw Error('EmptySortedList');
    } else {
      return this.items.shift();
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((acc, elem) => acc + elem)
    }
  }

  avg() {
    if (this.length === 0) {
      throw Error('EmptySortedList');
    } else {
      let sum = this.items.reduce((acc, elem) => {
        return acc + elem;
      })
      let avg = sum / this.length;
      return avg
    }
  }
}

module.exports = SortedList;
