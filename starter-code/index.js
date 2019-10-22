class SortedList {
    constructor() {
      this.items = []
    }

    get length(){
      return this.items.length
    }
    add(item) {
      this.items = [...this.items,item]
      this.items.sort(function(a, b){return a-b})
    }
    get(pos) {
      try {
        return this.items[pos]
      } catch (e) {
        throw new Error('OutOfBounds')
      }
    }
    max() {
      if (this.length === 0 ){
        throw new Error("EmptySortedList")
      } else {
        return this.items[this.length-1]
      }
    }
    min() {
      if (this.length === 0 ){
        throw new Error("EmptySortedList")
      } else {
        return this.items[0]
      }
    }
    average() {
      if (this.length === 0 ){
        throw new Error("EmptySortedList")
      } 
      
      return this.sum()/this.length
      
    }
    sum() {
      if (this.length === 0 ){
        return 0
      } else {
        return this.items.reduce((acc,c) =>  acc+c, 0)
        
      }
    }
  }

  
  module.exports = SortedList;