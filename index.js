class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (item) {
      this.items.push(item);
      this.items.sort((a, b) => a - b);
      this.length++;
    }
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    }
    return pos;
  }

  max() {
    if (this.items.length > 0) {
      let highest = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (highest < this.items[i]) {
          highest = this.items[i];
        }
      }
      return highest;
    }
    throw new Error("EmptySortedList");
  }

  min() {
    if (this.items.length > 0) {
      return this.items[0];
    }
    throw new Erro("EmptySotedList");
  }

  sum() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i];
    }
    return sum;
  }

  avg() {
    if (this.items.length <= 0) {
      throw new Erro("EmptySortedList");
    }
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i];
    }
    return sum / this.items.length;
  }
}

module.exports = SortedList;
