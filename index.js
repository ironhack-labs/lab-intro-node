class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.length >= pos) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.pop();
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
    //como está sorted, só precisei retornar o indice 0
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b);
    }
    // caculos da soma
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a, b) => a + b) / this.items.length;
    }
  }
}

module.exports = SortedList;
