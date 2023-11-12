class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b); 
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } 
    const maxValor = Math.max(...this.items);
    return maxValor;
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } 
    const minValor = Math.min(...this.items);
    return minValor;
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
