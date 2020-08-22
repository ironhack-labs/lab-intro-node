class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.length += 1
    const sortArray = this.items.sort((a, b) => {
      return a - b
    }) 
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length) {
      return this.items[this.length -1]
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length) {
      return this.items[0]
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
