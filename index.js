class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      }
      return 0
    });

    this.length = this.items.length
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length > 0) {
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length > 0) {
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    let sum = this.items.reduce((accum, currentValue) => {
      return accum + currentValue
    }, 0);
    return sum
  }



  avg() {
    if (this.length > 0) {
      let sum = this.items.reduce((accum, currentValue) => {
        return accum + currentValue
      }, 0);
      return sum / this.length
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
