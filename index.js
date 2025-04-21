class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (this.items.length === 0) {
      this.items.push(item);
    } else {
      let index = 0;
      while (index < this.items.length && this.items[index] < item) {
        index++;
      }
      this.items.splice(index, 0, item);
    }
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (!this.length) {
      throw new Error("EmptySortedList")
    } else {
      return this.items.reduce((a, b) => Math.max(a, b), -Infinity);
    }
  }

  min() {
    if (!this.length) {
      throw new Error("EmptySortedList")
    } else {
      return this.items.reduce((a, b) => Math.min(a, b), +Infinity);
    }
  }

  sum() {
    const initialValue = 0;
    return this.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );
  }

  avg() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      const total = this.sum();
      return total / this.length;
    }
}
}
module.exports = SortedList;
