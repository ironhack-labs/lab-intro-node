class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.items.sort((a,b) => a-b);
    this.length++;
  }
  get(pos) {
    return this.items[(pos - 1)];
  }
  max() {
 
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    } else{
      return this.items[this.items.length-1];
    }
 
  }
  min() {}
  average() {}
  sum() {}
};

module.exports = SortedList;
