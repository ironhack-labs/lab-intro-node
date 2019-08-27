class SortedList {
  constructor() {
    this.SortedList = [];
    this.length = 0;
  }

  add(item) {
    var sl = new SortedList();
    this.SortedList.push(item);
    this.length = this.SortedList.length;
    this.SortedList.sort((x, y) => x - y);
  }

  get(pos) {
    if (pos > this.length - 1) {
      throw new Error("OutOfBounds");
    } else {
      return this.SortedList[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.SortedList);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.SortedList);
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.SortedList.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    }
  }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
