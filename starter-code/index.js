class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length++;
    this.items = this.items.sort((itemA, itemB) => itemA - itemB);
  }
  get(pos) {
    
  }
  
  
  max() {}
  min() {}
  average() {}
  sum() {}
};


module.exports = SortedList;
