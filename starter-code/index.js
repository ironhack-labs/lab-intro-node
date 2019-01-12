class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b)=>a-b);
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if(this.items.length > 0)
      return this.items[this.length-1];
    else 
      throw new Error("EmptySortedList");
  }
  min() {
    if(this.items.length > 0)
      return this.items[0];
    else 
      throw new Error("EmptySortedList");
  }
  average() {
    if(this.length)
    return this.sum()/this.length;
    else
    throw new Error("EmptySortedList");
  }
  sum() {
    return this.items.reduce((item, reducer)=>{return item+reducer},0)
  }
};

module.exports = SortedList;
