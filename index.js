class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (this.length === 0 || item > this.items[this.items.length - 1]) {
      this.items.push(item);
      this.length++;
    } else {
      for (let i = 0; i < this.items.length; i++) {
        if (item < this.items[i]) {
          this.items.splice(i, 0, item);
          this.length++;
          return;
        }
      }
    }
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
