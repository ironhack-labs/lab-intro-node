class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort();
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((a, b) =>  Math.max(a, b));
  }
  min() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((a, b) => Math.min(a, b));
  }
  average() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((a,b) => (a + b)) / this.items.length ;
  }
  sum() {
    return this.items.reduce((a,b) => (a + b), 0); 
  }
};

module.exports = SortedList;
