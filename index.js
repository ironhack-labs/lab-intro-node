class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => {
      return a - b;
    });
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length > 0) {
      return this.items[this.length - 1]
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length > 0) {
      return this.items[0]
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.length === 0) {
      return 0
    } else {
      let sumItems = 0;
      for (let i = 0; i < this.length; i += 1) {
        sumItems += this.items[i];
      }
      return sumItems;
    }
  }

  avg() {
    if (this.length > 0) {
      return this.sum()/this.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;