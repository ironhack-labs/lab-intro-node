class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;

  }

  add(item) {
    this.items.push(item);
    //add a single value to the sorted list
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if(pos > this.items.length) {
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos];
    }
  }

  max() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    }else{
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList');
    }else{
      return Math.min(...this.items);
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
