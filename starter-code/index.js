class SortedList {
  constructor() {
    this.items = [];
  }
  get length() {
    return this.items.length;
  }

  add = (item) => {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
  };

  get = (pos) => {
    this.check(pos > this.length, "OutOfBounds");
    return this.items[pos];
  };

  max = () => {
    this.check(this.length === 0, "EmptySortedList");
    return Math.max(...this.items);
  };

  min = () => {
    this.check(this.length === 0, "EmptySortedList");
    return Math.min(...this.items);
  };

  sum = () => this.items.reduce((acc, val) => acc + val, 0);

  avg = () => {
    this.check(this.length === 0, "EmptySortedList");
    return this.sum() / this.length;
  };

  //utils:
  check = (condition, message) => {
    if (condition) throw new Error(message);
  };
}

module.exports = SortedList;
