class SortedList {
  constructor() {
    this.length = 0;
    this.items = [];
  };
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  };
  get(pos) {
    return this.items[pos - 1];
  };
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList"); 
    } else {
      return this.items[this.length - 1];
    };
  };
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList"); 
    } else {
      return this.items[0];
    };
  };
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList"); 
    } else {
      return this.sum() / this.length;
    };
  };
  sum() {
    if (this.length === 0) {
      return 0;
    };
    
    return this.items.reduce((a, b) => a + b);
    
  };
};

module.exports = SortedList;
