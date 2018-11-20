class SortedList {
  constructor() {
 this.items = []
 this.length = this.items.length
  }
  add(item) {
   this.length++
   this.items.push(item)
 return this.items.sort((a,b)=>a-b)
  }
  get(pos) {
   return this.items[pos - 1]
   this.length = this.items.length
  }
  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
    }
    return this.items[this.length - 1]
  }
  min() {
if (this.length === 0){
  throw new Error("EmptySortedList")
}
return this.items[0]
  }
  average() {
   if (this.length === 0){
    throw new Error("EmptySortedList")
   }
   return ((this.items.reduce((a,b)=>a+b,0))/this.length)
  }
  sum() {
    if (this.length === 0){
      return this.length
    }
    return this.items.reduce((a,b)=>a+b,0)
};
}

module.exports = SortedList;
