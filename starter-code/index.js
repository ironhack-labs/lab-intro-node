class SortedList {
 
    constructor() {
      this.items = [],
      this.length = 0;
    }
    add(item) {
      this.items.push(item);
      this.length += 1
    }
    get(pos) {
      const result = this.items[pos - 1]
      if (result) {
        return result
      } else {
        return 'Error: OutOfBounds'
      }
    }
    max() {
    if (this.length === 0) return new Error("EmptySortedList")
      return Math.max(...this.items)
    }
    min() {
      if (this.length === 0) return new Error("EmptySortedList")
      return Math.min(...this.items)
    }
    average() {
      return this.sum() / this.length
    }
    sum() {
      return this.items.reduce((a, b) => a + b, 0)
    }
  };
  
  module.exports = SortedList;