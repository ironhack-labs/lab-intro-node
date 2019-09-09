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
    return pos < this.length ? this.items[pos] : new Error("OutOfBounds");
  }
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  sum() {
    return this.items.length === 0
      ? 0
      : this.items.reduce((acc, num) => acc + num, 0);
  }
  average() {
    // NO ENTIENDO POR QUÉ CON EL TERNARIO NO FUNCIONA!! //
    // return this.items.length === 0? new Error("EmptySortedList") : this.sum()/this.items.length

    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.items.length;
    }
  }
}

module.exports = SortedList;
