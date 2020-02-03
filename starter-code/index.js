class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;

    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos <= this.length && pos >= 0) return this.items[pos];
    else throw newError("OutOfBounds");
  }

  max() {
    if (this.length) return this.items[this.length - 1]
    else throw new Error("EmptySortedList")
  }

  min() {
    if (this.length) return this.items[0]
    else throw new Error("EmptySortedList")
  }

  sum() {
    if (!this.length) return 0
    return this.items.reduce((acc, sum) => acc + sum)
  }

  avg() {
    if (!this.length) throw new Error("EmptySortedList")
    return this.sum() / this.length
  }
}

module.exports = SortedList;