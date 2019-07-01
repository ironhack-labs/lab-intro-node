class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
      this.items.push(item);
      this.items.sort((a, b) => a - b);
      this.length = this.items.length;
}
  get(pos) {
    this.length = this.items.length;
    return this.items[pos -1];
  }
  max() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if(this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  average() {
    if(this.items.length !== 0) {
      return this.items.reduce((acc, num)=>{
        return this.sum() / this.items.length;
      });
    }
    throw new Error("EmptySortedList");
  }
  sum() {
    if (this.items.length !== 0) {
      return this.items.reduce((acc, num)=>{
        return acc + num;
      });
    }
    return 0; 
  }
};

module.exports = SortedList;
