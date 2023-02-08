class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    let start = 0;
    let end = this.length;

    if (item < this.items[0]) {
      this.items.unshift(item)
      return;
    }

    else if (item > this.items[this.length - 1]) {
      this.items.push(item);
      return;
    }
    
    while (end - start > 1) {
      let midpoint = Math.ceil((start + end)/2);
      if (this.items[midpoint] < item) {
        start = midpoint;
      }
      else {
        end = midpoint;
      }
    }
    this.items.splice(end, 0, item);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length -1) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.min(...this.items);
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }

    return this.items.reduce((a, b) => a + b);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return this.sum() / this.items.length;

  }
}

module.exports = SortedList;
