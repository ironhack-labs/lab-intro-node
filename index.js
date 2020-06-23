class SortedList {
  constructor(items) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    return this.items.sort((a, b) => a - b), this.length;
  }

  get(pos) {
    if (pos > this.items.length -1){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.items === undefined || this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
   let max = this.items.reduce(function(a, b) {
      return Math.max(a, b)
    });
    return max;
  }

  min() {
    if (this.items === undefined || this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
    if (this.items.length === 0) return 0;
    const sum = arr => arr.reduce((a,b) => a + b, 0);
    return sum(this.items);
  }

  avg() {
    if (this.items === undefined || this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum()/this.items.length
  }
}

module.exports = SortedList;
