class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a,b) => a-b);

  }

  get(pos) {
    if (pos > this.items.length) {
    throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items.slice(-1);
  }

  min() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    return this.items.reduce((acc, cV) => acc + cV, 0);
  }

  avg() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let avg = this.items.reduce((acc, cV) => acc+cV, 0);
    return avg / this.items.length;
  }
}

const newSortedList = new SortedList();

module.exports = SortedList;
