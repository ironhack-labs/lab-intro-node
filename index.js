class SortedList {
  constructor() {
        this.items = [];
        this.length = this.items.length;
      }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
    this.length +=1;
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new error('EmptySortedList');
    } else {
      return this.items[this.items.length -1];
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() { 
     return this.items.reduce((total, numero) => total + numero, 0);
  }

  avg() {
    if (this.items.length === 0) {
      throw new error('EmptySortedList');
    } else {
      return this.sum() / this.items.length
    }
  }
}

module.exports = SortedList;