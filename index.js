class SortedList {
  constructor() {
    this.items = [];
    this.length = 0
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++
  }

  get(pos) {
    if (this.items.length < pos) {
       throw new Error('OutOfBounds');
    } else {
    return this.items[pos]
  }
}

  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items)
    } eles 
      throw new Error("EmptySortedList");
    
  }

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items);
    } else 
    throw new Error("EmptySortedList");
  }

  sum() {
    if (this.items.length > 0) {
      return this.items.reduce((a, b) => a + b)
    } else if (this.items.length == 0) {
      return 0  
    }
  }

  avg() {
    if (this.items.length > 0)
      return this.items.reduce((a, b) => a + b) / this.length;
      else throw new Error("EmptySortedList");
  }
}

module.exports = SortedList;
