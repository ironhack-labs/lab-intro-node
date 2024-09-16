class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (this.length === 0) {
      this.items.push(item);
    } else {
      let inserted = false;
      for (let i = 0; i < this.length; i++) {
        if (item < this.items[i]) {
          this.items.splice(i, 0, item);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        this.items.push(item);
      }
    }

    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let sumResult = 0;
    if (this.items.lenth === 0) {
      return (sumResult = 0);
    } else {
      return this.items.reduce((acc, current) => (acc += current), sumResult);
    }
  }

  avg() {
    let avg = 0;

    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return (avg = this.sum() / this.items.length);
    }
  }
}

module.exports = SortedList;
