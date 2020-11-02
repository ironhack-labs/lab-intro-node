class SortedList {
  constructor() {
    this.items=[]
    this.length=this.items.length
  }
  add(item) {
   this.items.push(item)
   return this.items.sort((a,b) => a-b)
  }
  get(pos) {
    if(!this.items[pos]){throw new Error('OutOfBounds')}
    return this.items[pos]
  }
  max() {
    if(!this.items.length){
      throw new Error('EmptySortedList')}
       else{
       return Math.max(...this.items)
     }
    }
  min() {
    if(!this.items.length){
      throw new Error('EmptySortedList')}
       else{
       return Math.min(...this.items)
     }
     }
  sum() {
    if(!this.items.length){
   return '0'}
    else{
     return this.items.reduce((ac, cv)=>ac +cv)
  }
  }
  avg() {
      let sum=this.items.reduce((ac, cv)=>ac +cv)
      return sum/this.items.length
     }
}


const orders= new SortedList()
module.exports = SortedList;

