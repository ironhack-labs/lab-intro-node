class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    const compare = (a, b) => a - b;
    this.items.push(item);
    this.items.sort(compare);
    this.length = this.items.length;
    return this.items;
  }

  get(pos) {
    let index = pos - 1;
    if (pos === 0) {
      index = 0;
      const casePos = 1;
      const cont = this.items.slice(index, casePos);
      return cont;
    }
    const cont = this.items.slice(index, pos);
    this.length = this.items.length;
    return cont;
  }

  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items);
    }
    throw new Error('EmptySortedList');
  }

  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items);
    }
    throw new Error('EmptySortedList');
  }

  average() {
    if (this.items.length > 0) {
      const sum = (acc, currVal) => acc + currVal;
      const arrSum = this.items.reduce(sum, 0);
      return arrSum / this.items.length;
    }
    throw new Error('EmptySortedList');
  }

  sum() {
    if (this.items.length > 0) {
      const sum = (acc, currVal) => acc + currVal;
      return this.items.reduce(sum, 0);
    }
    return 0;
  }
}

module.exports = SortedList;
