class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    if (this.length > 1) {
      this.items.sort((a, b) => {
        return a - b;
      });
    }
    console.log(this.items);
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos];
    }else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items != '') {
      return Math.max(...this.items);
    }else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items != '') {
      return Math.min(...this.items);
    }else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.items != '') {
      return this.items.reduce((acc, cur) => {
        return acc + cur;
      });
    }else {
      return 0;
    }
  }

  avg() {
    if (this.length > 0) { //no dividir entre cero
      return this.sum() / this.length;
    }else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;

