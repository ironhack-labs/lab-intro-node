class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.sortList();
    this.updateLength();
  }

  sortList() {
    this.items.sort((a, b) => a - b);
  }
  
  updateLength() {
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]) return this.items[pos];
    throw new Error('OutOfBounds');
  }

  max() {
  if (this.length === 0) {
    throw new Error('EmptySortedList');
  } else return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else return this.items[0];
    }

  sum() {
    return this.items.reduce ((a,b) => a + b, 0)
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');}
   else return this.sum() / this.length;
  }
}

module.exports = SortedList;
