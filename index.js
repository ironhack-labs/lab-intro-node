class SortedList {
  constructor() {
    this.length = 0
    this.items = []
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => (a - b))
    this.length = this.items.length;
  }

  get(pos) {
    if (pos <= this.items.length - 1) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length > 0) {
      return this.items[this.items.length - 1];
    } else {
      throw new Error('EmptySortedList');
    }
  }


  min() {
    if (this.items.length > 0) {
      return this.items[0];
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.items.length > 0) {
      let sum = 0
      for (let i = 0; i < this.items.length; i++) {
        sum += this.items[i]
      }
      return sum;

    }
    else {
      return 0;
    }
  }

  avg() {
    if (this.items.length > 0) {
      return this.sum() / this.items.length;
    }
    else {
      throw new Error('EmptySortedList');
    }
  }

}

module.exports = SortedList;
