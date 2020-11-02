class SortedList {
  constructor() {
    // this.list = new SortedList();
    this.items = [];
    this.length = 0; //SortedList.length = SortedList.items.length
  }

  add(item) {
    this.items.push(item).sort();
    this.length++;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error('OutOfBounds');
    };
    return SortedList[pos];
  };

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    let sum = 0;
    for (pos = 0; pos < this.length; pos++) {
      sum += this.items[pos];
    }
    return sum;
  }

  avg() {
    return (this.length === 0 ? 0 : this.sum() / this.length);
  }
}

module.exports = SortedList;