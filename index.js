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
    if (this.items[pos]) return this.items[pos];
    throw new Error('OutOfBounds');
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.length -1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];

  }

  sum() {
    return this.items.reduce(
      (acc, number) => acc + number, 0);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length; 
  }
}
module.exports = SortedList;
