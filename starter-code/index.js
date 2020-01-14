class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    return this.items.sort((a, b) => a - b);
  }

  get(pos) {
    return (
      this.items[pos] ||
      (() => {
        throw new Error('OutOfBounds');
      })()
    );
  }

  max() {
    // try {
    if (!this.length) throw new Error('EmptySortedList');
    return Math.max(...this.items);
    // } catch (err) {
    //   return ` ${err}`;
    //   // return `Error: ${err.message}`;//or
    // }
  }

  min() {
    //1.
    return !this.length
      ? (() => {
          throw new Error('OutOfBounds');
        })()
      : Math.min(...this.items);
    //2.
    // if (!this.length) {
    //   throw new Error('EmptySortedList');
    // }
    // return Math.min(...this.items);
  }

  sum() {
    return !this.length ? 0 : this.items.reduce((acc, val) => acc + val);
  }

  avg() {
    if (!this.length) throw new Error('EmptySortedList');
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
