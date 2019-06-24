class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(x) {
    this.items.push(x);
    this.length = this.items.length;
  }
  get(pos) {
    this.items.sort()
    return this.items[pos-1];
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((acc, cv) => (cv > acc ? cv : acc));
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((acc, cv) => (cv < acc ? cv : acc));
    }
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((acc, cv) => acc + cv) / this.length;
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce((acc, cv) => acc + cv);
    }
  }
}
module.exports = SortedList;
