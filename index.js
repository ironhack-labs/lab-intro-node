class SortedList {
  constructor() {}

  add(item) {}

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;

new SortedList {
  constructor(items, length) {
    this.items;
    this.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos = this.length) {

      return this.items[pos]

    } else {

      throw new Error('EmptySortedList');
    }
  }

  max() {
    if (this.items.length === 0) {

      throw new Error('EmptySortedList');

    } else {

      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0) {

      throw new Error('EmptySortedList');

    } else {

      return Math.min(...this.items);
    }
  }

}