class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(!this.items.length) throw new Error('EmptySortedList');
    return this.items[this.items.length-1];
  }

  min() {
    if(!this.items.length) throw new Error('EmptySortedList');
    return this.items[0];
  }

  sum() {
    if(!this.items.length) return 0;
    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  avg() {
    if(!this.items.length) throw new Error('EmptySortedList');
    let sum = this.sum();
    return sum / this.items.length;
  }
}

module.exports = SortedList;