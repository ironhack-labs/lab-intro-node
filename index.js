class SortedList {
  constructor() {
    this.items = [],
      this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    return this.items[pos] || this.item[pos]
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
     return Math.max(...this.items) 
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce((acc, value) => acc += value, 0)
  }

  avg() {
    if (this.length === 0)
      throw new Error('EmptySortedList');
    
    return this.items.reduce((acc, value) => acc += value, 0) / this.length
  }
}

module.exports = SortedList;
