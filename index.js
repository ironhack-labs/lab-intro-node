class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  };

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  };

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    };
  };

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.sort((a, b) => b - a)[0];
    };
  };

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    };
  };
  
  sum() {
    return this.items.reduce((acc, cur) => acc + cur, 0);
  };
  
  avg() { 
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum()/this.items.length;
    };
  };
}

module.exports = SortedList;