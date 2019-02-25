class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.length = this.items.length
    if (this.items.length>1) this.items = this.items.sort((a,b)=>a>b)
  }
  get(pos) {
    return this.items[pos-1]
  }
  max() {
    if(this.length===0) throw new Error("EmptySortedList")
    else return Math.max(...this.items)
  }
  min() {
    if(this.length===0) throw new Error("EmptySortedList")
    else return Math.min(...this.items)
  }
  average() {
    if(this.length===0) throw new Error("EmptySortedList")
    return this.sum()/this.length
  }
  sum() {
    if(this.length===0) return 0
    return this.items.reduce((ac,elm)=>ac+elm)
  }
};

module.exports = SortedList;
