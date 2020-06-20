class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
   this.items.push(item)
   this.items.sort((a,b) => a-b)
   this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length) {
      return this.items.indexOf(pos)
    } else {
      throw new Error('OutOfBounds');
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
    return this.items.reduce((ac, cur) => ac + cur, 0)
  }

  avg() {
    if(!this.length) {
      throw new Error ('EmptySortedList')
    } else {
      return this.sum() / this.length
    }
  }
}

module.exports = SortedList;
