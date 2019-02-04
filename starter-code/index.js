class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.splice(this.items.length,0,item)
    this.items.sort((a,b) => a-b)
    this.length = this.items.length
  }
  get(pos) {
    return this.items[pos]
  }
  max() {
    let maxValue = 0
    if(this.items.length === 0) throw new Error("EmptySortedList")
    return Math.max(...this.items)
    
  }
  min() {
    if(this.items.length === 0) throw new Error("EmptySortedList")
    return Math.min(...this.items)
  }
  average() {
    if(this.items.length === 0) throw new Error("EmptySortedList")
    let avg = this.items.reduce((acc,val)=> acc + val) / this.items.length
    return avg
  }
  sum() {
    if(this.items.length === 0) return 0
    let totalSum = this.items.reduce((acc,val)=> acc + val)
    return totalSum
  }
};

module.exports = SortedList;
