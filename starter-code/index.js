class SortedList {
  constructor() {
    this.items=[];
    this.length=this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length++;
    return this.items.sort((a, b) => {
      return a - b;
    });
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if (this.length === 0)
      throw new Error("EmptySortedList")
    else
      return Math.max(...this.items);
  }
  min() {
    if (this.length === 0)
      throw new Error("EmptySortedList")
    else
      return Math.min(...this.items);
  }
  average() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.sum()/this.length
  }
  sum() {
    return this.items.reduce(function(sum ,num){
      return sum + num;
    }, 0);
  }
};

module.exports = SortedList;
