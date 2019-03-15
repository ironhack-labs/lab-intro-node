class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length++;
  }
  get(pos) {
    return this.items[pos - 1];
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length - 1];
  }
  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
    }
    return this.items[0];
  }
  average() {
    if(this.length === 0) {
      throw new Error ("EmptySortedList");
    }
    return (this.sum() / this.length);
  }
  sum() {
    if ((this.length == 0)) return 0;
    return this.items.reduce((suma, num) => suma + num, 0);
  }
};

module.exports = SortedList;
