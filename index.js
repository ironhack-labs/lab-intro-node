class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => {
    return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    const num = this.items[pos]
    if (num) return num
    throw new Error('OutOfBounds');
  }

  max() {
    if (this.length === 0) throw new Error('EmptySortedList');
    else return this.items[this.length -1]
  }

  min() {
    if (this.length === 0) throw new Error('EmptySortedList');
    else return this.items[0]
  }

  sum() {
    return this.items.reduce( (b, a) => a + b, 0)
  }

  avg() {
    if (this.length === 0) throw new Error('EmptySortedList');
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
