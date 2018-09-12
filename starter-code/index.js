class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }
  add(item) { 
    this.items.push(item)
    this.items.sort((a,b)=>a-b)
    this.length = this.items.length  
  }
  get(pos) {
    return this.items[pos-1]
  }
  
  max() {
    if(this.length==0) throw new Error("EmptySortedList")
    
    return this.items[this.length-1]
  }
  min() {
    if(this.length==0) throw new Error("EmptySortedList")
    
    return this.items[0]
  }
  average() {
    if(this.length==0) throw new Error("EmptySortedList")
    let average = this.sum()/this.length
    return average
  }
  sum() {
    if(this.length==0) return 0
    let suma = 0
    this.items.forEach(i=> suma+=i)
    return suma
  }
};

module.exports = SortedList;
