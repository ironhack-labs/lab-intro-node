class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    return (this.items[pos-1]);
  }
  max() {
    if (this.items.length > 0) {
      return Math.max(...this.items);
    } else {
      let e = new Error();
      e.message = 'EmptySortedList';
      throw(e);
    }
  }
  min() {
    if (this.items.length > 0) {
      return Math.min(...this.items);
    } else {
      let e = new Error();
      e.message = 'EmptySortedList';
      throw(e);
    }
  }
  average() {
    try {
      let sum = this.items.reduce((acc, number) => acc + number);
      sum /= this.length;
      return sum;
    } catch {
      let e = new Error();
      e.message = 'EmptySortedList';
      throw(e);
    }
  }
  sum() {
    if (this.length > 0) {
      return this.items.reduce((sum, number) => sum + number);
    } else {
      return 0;
    }
  }
};

module.exports = SortedList;
