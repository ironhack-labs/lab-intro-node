class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort( (a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (!this.items[pos]){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (!this.length){
      throw new Error('EmptySortedList');
    }
    return this.items[this.length - 1];
  }

  min() {
    if (!this.length){
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    if (!this.length){
      return 0;
    }

    return this.items.reduce((prev, curr) => {
      return prev += curr;
    });
  }

  avg() {
    if (!this.length){
      throw new Error('EmptySortedList');
    }

    return this.items.reduce((prev, curr) => {
      return prev += curr;
    }) / this.length;
  }
}

module.exports = SortedList;
