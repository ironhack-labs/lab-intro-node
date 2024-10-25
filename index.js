class SortedList {
  constructor() {
    this.items  = [];
    this.length = 0;
  }

  add(item) {
    let eleIdx = this.items.findIndex(e => e > item);
    eleIdx     = (eleIdx === -1 ? this.length : eleIdx);
    this.items.splice(eleIdx, 0, item);

    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= (this.length)){
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[this.length-1];
  }

  min() {
    if (this.length === 0){
      throw new Error("Empty SortedList");
    }
    return this.items[0];
  }

  sum() {
    return this.items.reduce((acc, curr) => acc + curr, 0);
  }

  avg() {
    if (this.length === 0){
      throw new Error("Empty SortedList");
    }
    return this.sum()/this.length;
  }
}

module.exports = SortedList;