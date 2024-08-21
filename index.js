class SortedList {
  constructor() {
    this.items = [];
    this.length = items.length;
  }

  add(item) {
    this.items.length += 1;
    this.items.push(item);
    return this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.object.items[pos] === undefined) throw new Error("OutOfBounds");
    return this.object.items[pos];
  }

  max() {
    return !this.items.length ? "EmptySortedList" : Math.max(this.items);
  }

  min() {
    return !this.items.length ? "EmptySortedList" : Math.min(this.items);
  }

  sum() {
    return this.items.reduce((sum, next) => sum + next);
  }

  avg() {}
}

module.exports = SortedList;
