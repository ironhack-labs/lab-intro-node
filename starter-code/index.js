class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort();
    this.length += 1;
  }
  get(pos) {
    // this.items.sort();
    return this.items[pos];
  }
  max() {
    if (this.length !==0){
      return this.get(this.length-1);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    if (this.length !==0){
      return this.get(0);
    } else {
      throw new Error("EmptySortedList");
    }
  }
  average() {
    if (this.length !==0){
      return this.sum() / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
  sum() {
    if (this.length !==0){
      return this.items.reduce((acc,item) => acc += item);
    } else {
      return 0;
    }
  }
};

module.exports = SortedList;