class SortedList {
    constructor() {
      this.items = [],
      this.length = this.items.length
    }
    add(item) {
      this.items.push(item)
      this.length += 1
      this.items.sort((a, b)=>a-b)
    }
    get(pos) {
      if(pos > this.length){
        return 'OutOfBounds'
      }
      return this.items[pos]
    }
    max() {
      if(this.length===0){
        throw new Error("EmptySortedList")
      }
      return this.items[this.items.length-1]
    }
    min() {
      if(this.length===0){
        throw new Error("EmptySortedList")
      }
      return this.items[0]
    }
    sum() {
      if(this.length===0){
        return 0
      }
      return this.items.reduce((acumulator, element) => acumulator + element)
    }
    average() {
      if(!this.length){
        throw new Error("EmptySortedList")
      }
      return this.sum()/this.length
    }
  };
  
  module.exports = SortedList;
