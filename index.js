class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (this.items.length === 0) {
      this.items = [item];
    } else {
      let inserted = false;
      for (let i = 0; i < this.items.length; i++) {
        if (item < this.items[i]) {
          this.items.splice(i, 0, item);
          inserted = true;
          break;
        }
      }
      if (inserted === false) {
        this.items.push(item);
      }
    }

    this.length = this.items.length;
    return this.items;
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let largest = this.items[0];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] > largest) {
        largest = this.items[i];
      }
    }
    return largest;
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let smallest = this.items[0];
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] < smallest) {
        smallest = this.items[i];
      }
    }
    return smallest;
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i];
    }
    return total;
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
