class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    for (let i = 0; i < this.items.length; i++) {
      if (item < this.items[i]) {
        this.items.splice(i, 0, item);
        this.length += 1;
        return;
      }
    }

    this.items.push(item);
    this.length += 1;
  }

  get(pos) {
    try {
      return this.items[pos];
    } catch (Err) {
      throw new Error("OutOfBounds");
    }
  }

  isEmpty() {
    return this.items.length;
  }

  max() {
    if (this.isEmpty()) {
      return this.items[this.length - 1];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (!this.items.length) throw new Error("EmptySortedList");
    return this.items[0];
  }

  average() {
    if (this.isEmpty()) {
      return (
        this.items.reduce((num1, num2) => num1 + num2, 0) / this.items.length
      );
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (!this.items) return 0;

    return this.items.reduce((num1, num2) => num1 + num2, 0);
  }
}

module.exports = SortedList;
