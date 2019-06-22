class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b)=>a-b);
    this.length = this.items.length;
    return this.length;
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.max.apply(null, this.items);
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.min.apply(null, this.items);
  }
  average() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length;
    
  }
  sum() {
    if(this.length === 0){
      return 0;
    }
    return this.items.reduce(function(a, b) { return a + b; });
  }
};

module.exports = SortedList;
