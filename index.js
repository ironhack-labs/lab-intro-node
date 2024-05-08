class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;

    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    this.checkForErrors(pos);
    return this.items[pos];
  }
  max() {
    this.checkForErrors();
    return this.get(this.length - 1);
  }

  min() {
    this.checkForErrors();
    return this.get(0);
  }

  sum() {
    if (this.length == 0) return 0;
    return this.items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
  }

  avg() {
    this.checkForErrors();
    return this.sum() / this.length;
  }

  checkForErrors(index) {
    if (index == undefined) {
      if (this.length == 0) throw new Error("EmptySortedList");
    } else if (index > this.length || index < 0) throw new Error("OutOfBounds");
  }
}

module.exports = SortedList;
