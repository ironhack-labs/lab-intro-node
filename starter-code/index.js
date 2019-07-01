class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort();
    this.length = this.items.length;
  }
  get(pos) {
    if (this.length === 0) {
      return 0;
    } else {
      return this.items[pos-1];
    }
  }
  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length-1];
    }
  }
  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else return this.items[0];
  }
  average() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    else return this.sum() / this.length;
  }
  sum() {
    if (this.length === 0) return 0;
    else return this.items.reduce((a,b)=>{return a+b})
  }
};

module.exports = SortedList;
