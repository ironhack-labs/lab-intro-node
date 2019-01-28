class SortedList {
  constructor() {
    this.itens = [];
    this.length = this.itens.length;
  }

  add(item) {
    this.itens.push(item);
    this.itens.sort((a, b) => a - b);
    this.length += 1;
  }

  get(pos) {
    return this.itens[pos - 1];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.itens[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.itens[0];
  }
  
  average() {
    if (this.itens.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum()/this.length;
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.itens.reduce((acc, curr) => acc + curr, 0);
  }
};

module.exports = SortedList;