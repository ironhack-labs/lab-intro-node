class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    console.log(this.items)
    this.items.push(item);
    console.log(this.items)
    this.items.sort((a, b) => a - b);
    console.log(this.items)
    this.length = this.items.length
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
