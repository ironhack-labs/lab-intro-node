class SortedList {
    constructor() {
      this.items = []
    }
    add(item) {
      this.items = [...this.items, item].sort((a,b) => a-b)
      // this.items = [...this.items, item]
    }
    get length() {
      return this.items.length
    }
    get(pos) {
      if (pos >= this.items.length){
        throw new Error("OutOfBounds")
      }else{        
        return this.items[pos]
      }
    }
    max() {
      if (this.items.length === 0){
        throw new Error("EmptySortedList")
      }else{
        return this.items.sort((a,b) => b-a)[0]
      }
    }
    min() {
      if (this.items.length === 0){
        throw new Error("EmptySortedList")
      }else{
        return this.items.sort((a,b) => a-b)[0]
      }
    }
    average() {
      if (this.items.length === 0){
        throw new Error("EmptySortedList")
      }else{
        return this.sum()/this.items.length
      }
    }
    sum() {
      return this.items.reduce((acc, item) => acc + item,0)
    }
  };
  
  module.exports = SortedList;