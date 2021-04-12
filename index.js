class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => {
      //ou: this.items.sort((a, b) => (a - b));
      return a - b; // precisa do return pra funcionar assim!
    });
  }

  get(pos) {
    if (!this.items[pos]) {
      //as chaves ([]) accessam o index/posição do array.
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    return this.items[this.length - 1]; //ou: Math.max(...this.items)
  }

  min() {
    if (this.items.length === 0) throw new Error("EmptySortedList");
    return this.items[0]; //ou: Math.min(...this.items)
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b); //ou apenas: return this.items.reduce((a, b) => (a + b), 0)
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else return this.sum() / this.length;
  }
}

module.exports = SortedList;
