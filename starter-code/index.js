class SortedList {
  constructor(items = []) {
    this.items = items;
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if (this.length > 0){
      return Math.max(...this.items);
    };
    throw new Error("EmptySortedList");    
  }
  min() {
    if (this.length > 0){
      return Math.min(...this.items);
    };
    throw new Error("EmptySortedList");
  }
  average() {
    if (this.length > 0){
      return this.sum()/this.length;
    };
    throw new Error("EmptySortedList");
  }
  sum() {
    return this.items.reduce(function(sum ,el){
      return sum + el;
    }, 0);
  }
};

module.exports = SortedList;
