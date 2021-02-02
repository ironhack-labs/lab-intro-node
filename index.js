class SortedList {
  constructor() {
    this.items = [];
    this.length = "";
  }

  add(item) {
    this.items.push(item);
    this.item = this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos > this.length ){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (!this.length){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if (!this.length){
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((a,b) =>  a + b, 0);
  }

  avg() {}
}

module.exports = SortedList;
