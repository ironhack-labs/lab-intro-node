class SortedList {
  constructor() {
    this.length = 0;
    this.sortedList = [];
  }

  add(item) {
    this.sortedList.push(item);
    this.length = this.sortedList.length;
  }

  get(pos) {
    if (pos > this.length) {
      return new Error('OutOfBounds');
    }
    return this.sortedList[pos];
  }

  max() {
    if (this.sortedList.length > 0) {
      Math.max(this.sortedList);
    } else {
      throw new Error('EmptySortedList');

    }
  }

  min() {
    if (this.sortedList.length > 0) {
      Math.min(this.sortedList);
    } else {
      throw new Error('EmptySortedList');

    }
  }

  average() {
    if (this.sortedList.length > 0) {
      return this.sortedList.sum() / this.sortedList.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
  
  sum() {
    if (this.sortedList.length > 0) {
      return this.sortedList.reduce((acc, val) => {
        return acc + val;
      });
    }
    return 0;
  }
};

module.exports = SortedList;