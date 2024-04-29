class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
    return this.items;
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items.splice(pos, 1);
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let max = 0;
      for (const it of this.items) {
        if (it > max) {
          max = it;
        }
      }
      return max;
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let max = this.items[0];
      for (const it of this.items) {
        if (it < max) {
          max = it;
        }
      }
      return max;
    }
  }

  sum() {
    let sum = 0;
    for (const it of this.items) {
      sum += it;
    }
    return sum;
  }

  avg() {
    let sum = 0;
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      for (const it of this.items) {
        sum += it;
      }
      let avg = sum / this.length;
      return avg;
    }
  }
}

module.exports = SortedList;
