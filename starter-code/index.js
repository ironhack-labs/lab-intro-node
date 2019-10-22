class SortedList {
    constructor() {
      this.items = [];
    }

    get length() {
      return this.items.length
    }

    add(item) {
      this.items[this.length] = item;
      this.items = this.items.sort((a,b)=> {return a-b})
    }

    get(pos) {
      if( pos <= this.length -1) {
        return this.items[pos]
      } else {
        throw new Error("OutOfBounds")
      }
      
    }

    max() {
      const max = 0
      if (this.length === 0) {
        throw new Error("EmptySortedList")
      } else {
        return this.items[this.length-1]
      }
    }
    min() {
      if (this.length === 0) {
        throw new Error("EmptySortedList")
      } else {
        return this.items[0];
      }
    }
    average() {
      if( this.length === 0) {
        throw new Error("EmptySortedList")
      } else {
        return this.items.reduce((acc,num) => {
          return acc + num
        }, 0)/this.length
      }
    }
    sum() {
        return this.items.reduce((acc,num) => {
          return acc + num
        }, 0)
      
    }
  };
  
  module.exports = SortedList;
