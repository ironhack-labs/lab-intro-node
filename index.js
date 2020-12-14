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
      pos = this.items[pos];
      if (!pos) {
        throw new Error('OutOfBounds');
      } else {
        return pos;
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
      const sum = this.items.reduce((acc, pos) => {return acc + pos;});
      return sum;
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
