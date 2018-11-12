class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
  }

  get(pos) {
    return this.items[pos-1];
  }
  
  max() {}
  min() {}
  average() {}
  sum() {}
};

module.exports = SortedList;
