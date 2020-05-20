class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  };

  add(item) {
    this.items.push(item)
    // this.items.sort(function (a, b) {
    //   return a - b;
    // });
    this.items.sort((a, b) => a - b);

    this.length += 1 //this.items.length
  };

  get(pos) {
    if (!this.length[pos]) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  };

  max() {
    if (this.items.length <= 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max.apply(null, this.items);
    }
  };

  min() {

    if (this.items.length <= 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min.apply(null, this.items);
    }

  };

  sum() {
    if (this.items.length <= 0) {
      return 0
    } else {
      return this.items.reduce((a, b) => a + b)
    }
  };

  avg() {
    if (this.items.length <= 0) {
      throw new Error('EmptySortedList');
    } else {
      return (this.items.reduce((a, b) => a + b)) / this.items.length
    }
  }
}

module.exports = SortedList;