class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    let cut = this.items.findIndex(elem => elem > item);
    cut > -1 ? this.items.splice(cut, 0, item) : this.items.push(item);
    this.length = this.items.length;
  }
  get(pos) {
    if (pos >= this.length || pos < 0) {
      throw new Error(`OutOfBounds`);
    };
    return this.items[pos];
  }
  max() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    };
    return this.items.reduce((acc, elem) => acc > elem ? acc : elem, 0);
  }
  min() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    };
    return this.items.reduce((acc, elem) => acc < elem ? acc : elem, this.items[0]);
  }
  average() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    };
    return this.sum() / this.length;
  }
  sum() {
    if (this.length <= 0) {
      return 0;
    };
    return this.items.reduce((acc, elem) => acc + elem, 0);
  }
};

module.exports = SortedList;