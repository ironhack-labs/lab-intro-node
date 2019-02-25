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
    else {
      let max = this.items[0]
      this.items.forEach(element => {
        if (element>=max) max=element
      })
      return max
    }
  }
  min() {
    if(this.length===0) throw new Error("EmptySortedList")
    else {
      let min = this.items[0]
      this.items.forEach(element => {
        if (element<=min) min=element
      })
      return min
    }
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
