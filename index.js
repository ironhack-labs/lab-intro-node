class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length += 1;
    if(this.length > 1) return this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if(this.items.length < pos) throw new Error('OutOfBounds');
    return this.items[pos];
    
  }

  max() {
    if(this.items.length === 0) throw new Error('EmptySortedList');
    return Math.max(...this.items);
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
