class SortedList {
  constructor() {
    this.items= []
    this.length= 0;
  }
  add(item) {
    this.items.push(item)
    this.length= this.items.length
    this.items.sort((a,b)=>a-b)
  }
  get(pos) {
    return this.items[pos-1]
  }
  max() {
    if(this.items.length ===0){throw new Error("EmptySortedList")}
    return Math.max(...this.items)
  }
  min() {
    if(this.items.length ===0){throw new Error("EmptySortedList")}
    return Math.min(...this.items)
  }
  average() {
    if(this.items.length ===0){throw new Error("EmptySortedList")}
    return this.sum()/this.items.length
  }
  sum() {
    if(this.items.length ===0){return 0}
   return this.items.reduce((x,i)=>x+i)
  }
};
var sl = new SortedList()

module.exports = SortedList;
