class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }
  add(item) {
    this.items = [...this.items, item]
    this.items.sort((a , b) => a-b);
    this.length = this.items.length
  }
  get(pos) {
    if (this.items[0] != 0) return this.items[pos-1]
    return this.items[pos]    
  }
  max() {
    if (this.length === 0) throw new Error("EmptySortedList")
    return this.items[this.length-1]
  }
  min() {
    if (this.length === 0) throw new Error("EmptySortedList")
    return this.items[0]
  }
  average() {
    if (this.length === 0) throw new Error("EmptySortedList")
    return this.items.reduce((acc, i) => acc += i) / this.length
  }
  sum() {
    if (this.length === 0) return 0
    return this.items.reduce((acc, i) => acc += i) 
   }
};

module.exports = SortedList;
