class SortedList {
    constructor() {
      this.items = [];
      this.length = this.getLength();
    }
    add(item) {
      this.items.push(item);
      this.length = this.items.length;
    }
    get(pos) {
      return this.items[pos];
    }
    max() {}
    min() {}
    average() {}
    sum() {}
    getLength(){
      return this.items.length;
    }
  };
  
  module.exports = SortedList;