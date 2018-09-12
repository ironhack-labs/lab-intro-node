class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length; 
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b)
    this.length = this.items.length; 
  }

  get(pos) {
    return this.items[pos -1];
  }

  max() {}
  min() {}
  average() {
    sum = 0
  }
  sum() {}
};

module.exports = SortedList;
