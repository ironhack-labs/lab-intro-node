class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.length = this.items.push(item);
    let sort = this.items.sort((item1, item2) => {
      if (item1 > item2) return 1;
      if (item1 < item2) return -1;
      else return 0;
    });
    this.items = sort;
  }
  get(pos) {
    if (pos <= this.length - 1) {
      return this.items[pos];
    } else {
      console.error("OutOfBounds");
    }
  }
  max() {
    if (this.length > 0) {
      return this.get(this.length - 1);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (this.length > 0) {
      return this.get(0);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  average() {
    if (this.length > 0) {
      return this.sum() / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.length > 0) {
      let sum = this.items.reduce((acc, curr) => {
        return (acc += curr);
      }, 0);
      return sum;
    } else {
      return 0;
    }
  }
}

module.exports = SortedList;
