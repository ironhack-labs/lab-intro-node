class SortedList {
  constructor(items,length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => {return a - b})
    this.length++
  }

  get(pos) {
    if(pos in this.items){
      return this.items.at(pos)
    }
    throw new Error("OutOfBounds");
  }

  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items)
  }

  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items)
  
  }

  sum() {
    return this.items.reduce((init, a) => init + a,0)
  }

  avg() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((init, a) => init + a,0) / this.length
  }
}

module.exports = SortedList;



