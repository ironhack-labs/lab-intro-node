class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    const value = this.items[pos];
    if (value)
      return this.items[pos]
    throw new error("OutOfBounds");
  }

  max() {
    if (this.length === 0) 
      throw new Error("EmptySortedList");
      
    const max = Math.max(...this.items);
    return max;
  }


  min() {
    if (this.length === 0) 
      throw new Error("EmptySortedList");
      
    const min = Math.min(...this.items);
    return min;
  }

  sum() {
    return this.items.reduce((acc, val) => acc + val, 0);
  }

  avg() {
    if (this.length === 0)
      throw new Error("EmptySortedList");

    const sum = this.items.reduce((acc, val) => acc + val, 0);
    const average = sum / this.length;
    return average;
  }
}

module.exports = SortedList;

// const max = Math.max(...this.items);
// return Math.max(...this.items)