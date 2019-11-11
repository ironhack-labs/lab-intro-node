class SortedList {
    constructor() {
    this.items=[],
    this.length= 0
    }
    add(item) {
      this.items.push(item)
      this.length++
      return this.items.sort((a,b) => a-b)
    }
    get(pos) {
      if(this.items[pos] === null){
        throw new Error("outOfBounds")
      }
      return this.items[pos]
    }
    max() {
      if(this.items.length<= 0){
        throw new Error("EmptySortedList")
      }
        return Math.max.apply(0, this.items)
      
      
    }
    min() {
      if(this.items.length<= 0){
        throw new Error("EmptySortedList")
      }
        return Math.min.apply(0, this.items)
      
    }
    average() {
      if(this.items.length<= 0){
        throw new Error("EmptySortedList")
      }
        return (this.items.reduce((ac,cu) => ac + cu,0))/this.length
      

    }
    sum() {

      if(this.items.length<= 0){
        return 0
      }
        return this.items.reduce((ac,cu) => ac + cu,0)
      
     
    }
     
  };
  
  module.exports = SortedList;