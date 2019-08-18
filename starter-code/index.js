class SortedList {
    constructor(items = []) {
      this.items = items;
      this.length = this.items.length;

    }
    add(item) {
      this.items.push(item);
      this.length = this.items.length;
    }
    get(pos) {}
    max() {}
    min() {}
    average() {}
    sum() {}
  };
  
  module.exports = SortedList;