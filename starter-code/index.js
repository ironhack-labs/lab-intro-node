class SortedList {
    constructor(items, length) {
      this.items = []
    }

    get length() {
      return this.items.length
    }

    add(item) {
        this.items.push(item)
        this.items = this.items.sort((a,b) => a-b);
    }

    get(pos) {
      if (pos > this.length) {
        throw new Error("OutOfBounds")
      } else {
        return this.items[pos]
      }
    }

    max() {
      if (this.length === 0){
        throw new Error("EmptySortedList")
      } else {
        return this.items[this.length-1]
        /* return this.items.reduce((acc,el) => {
          if (acc < el) acc = el
          return acc
        }, this.items[0]) */
      }
    }

    min() {
      if (this.length === 0){
        throw new Error("EmptySortedList")
      } else {
        return this.items[0]
        /* return this.items.reduce( (acc,el) => {
          if (acc > el) acc = el
          return acc
        }, this.items[0] ) */
      }

    }
    
    sum() {
      return this.items.reduce( (acc,el) => acc + el ,0 )
    }

    average() {
      if (this.length === 0){
        throw new Error("EmptySortedList")
      } else {
        return this.items.reduce( (acc,el) => (acc += el), 0)/this.length
      }

    }

  };
  
  module.exports = SortedList;