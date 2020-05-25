class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.sort();
    this.length = this.items.length;
  }

  get(pos) {
    if(pos >= this.items.length || pos < 0) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(this.items.length <= 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.slice(-1);
    }
  }

  min() {
    if(this.items.length <= 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    if(this.items.length <= 0) {
      return 0;
    } else {
      return this.items.reduce((sum, el) => {
        return sum += el;
      });
    }
  }

  avg() {
    if(this.length <= 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.length;
    }
  }

  sort() {
    this.items.sort((a, b) => {
      return a - b;
    });
  }

}

module.exports = SortedList;
