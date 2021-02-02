class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b );
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    } 
  }

  max() {
    throw new Error('EmptySortedList');
  }

  min() {
    throw new Error('EmptySortedList');
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
