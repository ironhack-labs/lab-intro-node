class SortedList {
    constructor() {
      this.items = [];
      this.length =  this.items.length;

    }
    
    add(item) {
      this.items.push(item)
      this.length = this.items.length
      this.items.sort((a,b) => a-b)
    }

    get(pos) {
     if (pos <= this.items.length-1) {
      return  this.items[pos]
     }  else {throw new Error("OutOfBounds")
        }
     }
    
    max() {
      if (this.items.length == 0) {
        throw new Error("EmptySortedList")
      } else {
        this.items.sort((a,b) => b-a)
        return this.items[0]
      } 
    }

    min() {
      if (this.items.length >= 1) {
        this.items.sort((a,b) => a-b)
        return this.items[0]
      } else {
        throw new Error("EmptySortedList")
       }
    }

    average() {
      if (this.items.length >= 1) {
        return this.items.reduce((a,b) => a+b)/ this.items.length
      } else {throw new Error("EmptySortedList")}
    }


    sum() {
      if (this.items.length >= 1) {
        return (this.items.reduce((a,b) => a+b))
      } else {return 0}
    }
  };
  
  module.exports = SortedList;