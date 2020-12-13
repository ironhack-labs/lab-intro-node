class SortedList {


  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    for (let i = 0; i < this.items.length; i++) {
      pos = this.items[i - 1];
      if (!pos) {
        throw new Error('OutOfBounds');
      } else {
        return this.items[i];
      }
    }
  }

  max() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }

  }

  sum() {
    if(this.length === 0) {
      return 0;
    } else {
      this.items.reduce((acc, i) => {return acc + i;});
      }
  }

  avg() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
