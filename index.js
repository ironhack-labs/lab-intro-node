class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.length){
      throw new Error('OutOfBounds');
    } else{
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a, b) => a > b ? a : b);
    }
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
