class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a,b) => a-b)
  }
  get(pos) {
    return this.items[pos-1]
  }
  max() {
    if(this.items.length == 0 ) throw new Error("EmptySortedList")
    return this.items.slice(-1).pop()
  }
  min() {
    if(this.items.length == 0 ) throw new Error("EmptySortedList")
    return this.items.slice(0).shift()
  }
  average() {
    if(this.items.length == 0 ) throw new Error("EmptySortedList")
    return this.sum() / this.items.length
  }
  sum() {
    if(this.items.length == 0) return 0
    return this.items.reduce(function(a, b){ return a + b; })
  }
};



module.exports = SortedList;
