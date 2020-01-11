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

  max() {
      if (!this.items.length)
          throw new Error("EmptySortedList");

        return this.items[this.items.length - 1];
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;