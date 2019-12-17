class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.items[pos]) {

    } else {

    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;