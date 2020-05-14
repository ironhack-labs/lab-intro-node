class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
    this.length = this.items.length;

  }

  get(pos) {
    if (this.items[pos] === undefined){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }

    return this.items[this.items.length -1];
  }

  min() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }

    return this.items[0];
  }

  sum() {
    if (this.items.length === 0){
      return 0;
    }

    return this.items.reduce((num, acc) => num + acc);
  }

  avg() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }

    return this.items.reduce((num, acc) => num + acc) / this.items.length;
  }
}

module.exports = SortedList;
