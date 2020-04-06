class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b) => a-b);
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds")
    }
    return this.items[pos]
  }

  max() { 
if (!this.length) {
  throw new Error('EmptySortedList')
} 
return Math.max(...this.items)
  }

  min() {
    if (!this.length) {
      throw new Error('EmptySortedList')
    } 
    return Math.min(...this.items)
      }

  sum() {
    if (!this.items.length) {
      return 0;
    }
    return this.items.reduce((a,b) => a+b);
  }

  avg() {
if (!this.length) {
  throw new Error ('EmptySortedList');
}
    return this.sum() / this.length  
  }
}

module.exports = SortedList;
