class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (this.items.length === 0) {
      this.items.splice(0, 0, item);
    } else {
      this.items.forEach((arrayItem, index) => {
        if (item < arrayItem) {
          this.items.splice(index - 1, 0, item);
        }
      });
      this.length = this.items.length;
    }
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (!this.items) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length - 1];
  }

  min() {
    if (!this.items) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    return this.items.reduce((acc, val) => {
      acc += val;
    }, 0);
  }

  avg() {
    if (!this.items) {
      throw new Error("EmptySortedList");
    }
    return (
      this.items.reduce((acc, val) => {
        acc += val;
      }, 0) / this.items.length
    );
  }
}

module.exports = SortedList;
