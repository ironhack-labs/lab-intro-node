class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(x) {
   this.length++
   this.items.push(x)
   this.items.sort(function(a,b){
     return b < a
   })
  }
  get(pos) {
  return this.items[pos-1]
 } 

  max() {
    if(this.length === 0) { throw new Error("EmptySortedList")} else { 
   return  Math.max(...this.items) }
  }
  min() {
    if(this.length === 0) { throw new Error("EmptySortedList")} else { 
    return Math.min(...this.items)}
  }
  average() {
    if(this.length === 0) { throw new Error("EmptySortedList")} else { 
  return Math.floor(this.sum()/this.items.length) }
  };
  sum() {
    let sum = this.items.reduce(function(acc, val){
      return acc + val
    },0)
return sum    
  }
};

module.exports = SortedList;

