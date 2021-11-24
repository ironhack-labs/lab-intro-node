class SortedList {
  constructor() {
   this.items = [];
   this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function compare(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
  }

  get(pos) {
    if (pos > this.length) {
      this.throwErrorMessage("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    this.checkIfEmptyList("EmptySortedList");
    return Math.max(...this.items);
  }

  min() {
    this.checkIfEmptyList("EmptySortedList"); 
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((sum, item) => sum + item, 0);
  }

  avg() {
    this.checkIfEmptyList("EmptySortedList");
    return this.sum() / this.length;
  }

  checkIfEmptyList(message) {
    if (this.length === 0) {
      this.throwErrorMessage(message);
    }
  }

  throwErrorMessage(message) {
    const error = new Error(message);
    throw error;
  }
}

module.exports = SortedList;
