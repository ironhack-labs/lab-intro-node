class SortedList {
    constructor(items, length) {
      this.items = [];
      this.length = this.items.length;
    }
    add(item) {
      this.items.push(item);
      this.length = this.items.length;
      
    }
    get(pos) {
      if(pos > this.items.length) {
        throw new Error('OutOfBounds');
      }
      return this.items[(pos)];
    }
    max() {
      if (this.items == ''){
        throw new Error("EmptySortedList");
      }
      return this.items.slice(-1);
    }
    min() {}
    average() {}
    sum() {}
  };
  
  module.exports = SortedList;