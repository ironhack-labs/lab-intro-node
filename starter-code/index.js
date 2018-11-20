class SortedList {
  constructor() {
    this.items=[]
    this.length = 0
  }
  add(x) {
    this.items.push(x)
    this.items.sort(function(a,b){
      return a-b
    })
    
    this.length++
  }
  get(pos) {
    return this.items[pos-1]
  }
  max() {
    if (this.items.length=== 0){
      throw new Error("EmptySortedList")
    }else {
      return this.items[this.items.length-1]
    }
    
  }
  min() {
    if (this.items.length=== 0){
      throw new Error("EmptySortedList")
    }else {
      return this.items[0]
    }
  }
  average() {
    if (this.length>0){
      let sum = this.items.reduce((a,b)=>a+b)
      return sum/this.length
    }else {
      throw new Error("EmptySortedList")
    }
    
  }
  sum() {
    if (this.length>0){
      return this.items.reduce((a,b)=>a+b)
    }else{
      return 0
      }
    }
  }
// };

module.exports = SortedList;
