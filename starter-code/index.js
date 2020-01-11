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
      if (this.items.length)
        return this.items[this.items.length - 1];

      throw new Error("EmptySortedList");
  }

  min() {
      if (this.items.length)
          return this.items[0];

      throw new Error("EmptySortedList");
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;