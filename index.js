class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.forEach(item => {
      this.items.push(item);
      this.items.sort((a, b) => a - b);
      this.length = this.items.length;
    });
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      console.log("OutOfBounds");
      return;
    }

    return this.items[pos];
  }
}

max() {
  if (this.length === 0) {
    console.log("EmptySortedList");
    return;
  }
  return this.items[this.length - 1];
}

min() {
  if (this.length === 0) {
    console.log("EmptySortedList");
    return;
  }

  return this.items[0];
}


sum() { }

avg() { }

module.exports = SortedList;
