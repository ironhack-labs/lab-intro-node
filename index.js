class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
     this.items.sort((a, b) => a - b);
     this.length++
  }

  get(pos) {
    for (let i = 0; i < this.length; i++) {
      if (pos == this.items[i]) {
        return this.items[i]
      }
      else if (pos > this.length) {
        throw new Error('OutOfBounds');
      }
    }
  }

  max() {
    if (this.length > 0) {
      return Math.max(...this.items)
    }
    throw new Error('EmptySortedList')
     
  }

  min() {
    if (this.length > 0) {
      return Math.min(...this.items)
    }
    throw new Error('EmptySortedList')
  }

  sum() {
    if (this.length > 0) {
      return this.items.reduce((acc, item) => acc + item, 0)
    }
    return 0

  }

  avg() {
    if (this.length > 0) {
      return this.sum() / this.length
    }
    throw new Error('EmptySortedList')
    
  }
}

module.exports = SortedList;
