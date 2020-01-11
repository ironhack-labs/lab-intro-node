class SortedList {
  constructor() {
      this.items = [];
      this.length = 0;
  }

  add(item) {
      this.items.push(item);
      this.items.sort( (a,b) => a - b );
      this.length++;
  }

  get(pos) {
    if (pos <= this.length)
        return this.items[pos];

    throw new Error("OutOfBounds");
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;