class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b)
    this.length++
  }

  get(pos) {
    if (pos > this.length-1) throw new Error('OutOfBounds');
    return this.items[pos]
  }

  max() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    return Math.max(...this.items)
  }

  min() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce((accum,current)=> accum + current, 0)
  }

  avg() {
    if (this.items.length === 0) throw new Error('EmptySortedList');
    return this.sum()/this.length;
  }
}

module.exports = SortedList;
