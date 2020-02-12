class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);

    this.items.sort((a, b) => {
      return a - b;
    });

    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length != 0) {
      return Math.max(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length != 0) {
      return Math.min(...this.items);
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.length != 0) {
      return this.items.reduce((accum, value) => {
        return accum + value;
      });
    } else {
      return 0;
    }
  }

  avg() {
    if (this.length != 0) {
      return (
        this.items.reduce((acc, value) => {
          return acc + value;
        }) / this.length
      );
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
