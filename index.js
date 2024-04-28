class SortedList {
  constructor() {
      this.items = [];
      this.length = 0;
    }
    
  add(item) {
      this.items.push(item); 
      this.items.sort((a, b) => a - b); 
      this.length++;
  }

  get(pos) {
    if (pos >= 0 && pos < this.length) {
      return this.items[pos]; // Return the value at the specified position
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    Math.max(this.items);
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
    }
  

  sum() {
    if (this.items.length === 0) return 0;
    return this.items.reduce((acc, curr) => acc + curr, 0); 
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
  }
  return this.sum() / this.length;
}
}
module.exports = SortedList;
