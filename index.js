class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {

    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {

    if (this.items[pos] === undefined) {
      throw new Error("OutofBounds");
    }
    return this.items[pos];
  }

  max() {

    if (this.length === 0) {
      throw new Error ("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {

    if (this.length === 0) {
     throw new Error ("Empty SortedList");
    }
    return Math.min(...this.items);
  }

  sum() {

    return this.items.length ? this.items.reduce((acc, item) => acc + item, 0) : 0;
  }

  avg() {

    if (this.items.length === 0) {
      throw new Error ("Empty SortedList");
    }

    return this.sum()/(this.items.length);
  }
}

module.exports = SortedList;
