class SortedList {
  constructor() {
    this.items = [];
    this.lenght = this.items.length;
  }
  
  add(item) {
    this.items.push(item);
    this.lenght = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error ('OutOfBounds');
    } else {
      return this.items(pos);
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error ('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
