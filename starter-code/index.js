class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((num1, num2) => {
      return num1 - num2;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length) {
      return this.items.indexOf(pos);
    }
    else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      return this.items.reduce((num1, num2) => {
        return Math.max(num1, num2);
      });
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      return this.items.reduce((num1, num2) => {
        return Math.min(num1, num2);
      });
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    else {
      return this.items.reduce((num1, num2) => {
        return num1 + num2;
      });
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;