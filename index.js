class SortedList {
  constructor(items, length) {
    
      this.items = [],
      this.length = this.items.length
    
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=> a-b)
    this.length = this.items.length
  }

  get(pos) {
    if(pos > this.length) {
     throw new Error("OutOfBounds");
    }
    if(pos < this.length){
      return this.items[pos]
    }
  }

  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length-1]
  }

  min() {
    if(this.length === 0){
      throw new Error("Empty SortedList");
    }
    return this.items[0]
  }

  sum() {
   return this.items.reduce((acc, curre)=> acc + curre , 0) 
  }

  avg() {
    if(this.length === 0){
      throw new Error("Empty SortedList")
    }
    return this.sum()/ this.items.length
  }
}

module.exports = SortedList;
