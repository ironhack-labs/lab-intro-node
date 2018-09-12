class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
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
   if(this.length===0) {throw new Error("EmptySortedList")}
   return this.items[this.length-1]
  }
  min() {
    if(this.length===0) {throw new Error("EmptySortedList")}
    return this.items[0]
  }
  average() {
    if(this.length===0) {throw new Error("EmptySortedList")}
    return this.sum()/this.items.length
  }
  sum() {
    if(this.length===0) {return 0}
    let total=0
    this.items.forEach((element)=>{
      total=total+element
    })
    return total
  }
};

module.exports = SortedList;
