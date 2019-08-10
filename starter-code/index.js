class SortedList {
  constructor(items = []) {
    this.items = items;
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    this.items.push(item);
    if (this.items[pos - 1]) {
      return this.items[pos - 1];
    }

    throw new Error('OutOfBounds');
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.items.sort()[this.items.length - 1];
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.items.sort()[0];
  }

  average() {
    if (this.items.length > 0) {
      return this.items.reduce((total, item) => total + item) / this.length;
    }
    throw new Error('EmptySortedList');
  }

  sum() {
    return this.items.reduce((total, item) => total + item, 0);
  }
}
