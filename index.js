class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);

    this.sortList();
    this.updateLength();
  }

  get(pos) {
    if (this.items[pos]) return this.items[pos];

    throw new Error('OutOfBounds');
  }

  max() {
    this.verifyLength();

    return this.items[this.length - 1];
  }

  min() {
    this.verifyLength();

    return this.items[0];
  }

  sum() {
    return this.items.reduce(
      (acc, number) => acc + number,
      0,
    );
  }

  avg() {
    this.verifyLength();

    return this.sum() / this.length;
  }
}

module.exports = SortedList;
