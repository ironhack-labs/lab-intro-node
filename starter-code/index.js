class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a > b);
    this.length = this.items.length;
  }

  get(pos) {
    return this.items[pos];
  }

  max() {
    if (this.items[this.length - 1]) return this.items[this.length - 1];
    else throw new Error("EmptySortedList");
  }

  min() {
    if (this.items[this.length - 1]) return this.items[0];
    else throw new Error("EmptySortedList");
  }

  average() {
    if (this.items[this.length - 1]) return this.sum() / this.length;
    else throw new Error("EmptySortedList");
  }

  sum() {
    if (this.items[this.length - 1])
      return this.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      );
    else return 0;
  }
}

module.exports = SortedList;
