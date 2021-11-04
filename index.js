class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    
    if (pos > this.items.length) {
    throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedlist')
    }
    return this.items[this.items.length - 1]
  }

  min() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedlist')
    }
    return this.items[0]
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    let sumArray = this.items.reduce((sum, el) => sum + el, 0)
    return sumArray;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    }
    return (this.items.reduce((sum, el) => sum + el, 0)) / this.items.length
  }
}

module.exports = SortedList;
