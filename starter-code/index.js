class SortedList {
    constructor() {
      this.items = []
      // this.length = this.items.length

    }
    get length(){
      return this.items.length
    }

    add(x) {
      this.items = [...this.items,x]
      return this.items.sort(function(a, b){return a-b})

     
    }
    get(pos) {
      return this.items[pos]
       
    }
    max() {
      if(this.items.length === 0){
        throw new Error("EmptySortedList")
      }
      else{
      const orderedArray = this.items.sort(function(a, b){return a-b})
      const result = orderedArray[orderedArray.length - 1]
      return result
      }
      
    }
    min() {
      if(this.items.length === 0){
        throw new Error("EmptySortedList")
      }
      else{
      const orderedArray = this.items.sort(function(a, b){return a-b})
      const result = orderedArray[0]
      return result
      }


    }
    average() {
      if(this.items.length === 0){
        throw new Error("EmptySortedList")
      }
      else{

     return this.items.reduce((a, b) => a + b, 0)/this.items.length
      }

    }
    sum() {
      if(this.items.length === 0){
        return 0
      }
      else{
      return this.items.reduce((a, b) => a + b, 0)
        
      }


    
    }
  };
  
  module.exports = SortedList;