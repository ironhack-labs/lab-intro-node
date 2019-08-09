class SortedList {
  constructor(itens, length) {
    this.itens = [];
    this.length = this.itens.length;
  }

  add(item) {
    this.itens.push(item);
    this.length = this.itens.length;
    this.itens.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds")
    }

    return this.itens[pos]
  }

  max() {
    if (!this.length) {
      throw new Error("EmptySortedList")
    }

    return Math.max(...this.itens);
  }

  min() {
    if (!this.length) {
      throw new Error("EmptySortedList")
    }

    return Math.min(...this.itens);
  }

  average() {
    if (!this.length) {
      throw new Error("EmptySortedList")
    }

    return this.sum() / this.length
  }
  
  sum() {
    if (!this.length) {
      return 0;
    }
  
    return this.itens.reduce((value, sum) => value + sum);
  }
};

  module.exports = SortedList;