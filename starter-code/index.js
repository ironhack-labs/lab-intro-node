class SortedList {
  constructor() {
     this.items = [];
     this.length = 0
  }
  add(item) {
    this.items.push(item)
    this.length ++
    this.items.sort ((a,b)=>a-b)

  }
  get(pos) {
    return this.items[pos-1]
  }
  max() {
    if (this.length===0){
       throw new Error("EmptySortedList")
    }
    return this.items [this.items.length-1]

  }
  min() {
    if (this.length===0){
      throw new Error("EmptySortedList")
   }
   return this.items[0]
  }
  average() {
    if (this.length===0){
      throw new Error("EmptySortedList")
   }
   let sum = this.items.reduce ((a,b)=>a+b)
   let avg = sum/this.length
   return avg

  }
  sum() {
    if (this.length===0){
      return 0  
    }
    let sum = this.items.reduce ((a,b)=>a+b)
      return sum
  }
};

module.exports = SortedList;
