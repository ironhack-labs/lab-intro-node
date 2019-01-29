class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(x) {
    this.items.push(x)
    this.items.sort((a, b) => {return a - b})
    this.length = this.items.length
  }
  get(pos) {
    return this.items[pos - 1]
    //return this.items.indexOf(pos)
  }
  max() {
    if (this.length > 0) return this.items[this.length - 1]
    
    throw new Error("EmptySortedList")
  }
  min() {
    if (this.length > 0) return Math.min.apply(null, this.items)

    throw new Error("EmptySortedList")
  }
  
  sum() {
    if (this.length > 0){
      return this.items.reduce (function(acumulator , item){
        return acumulator + item
      })
    }
    return 0
  }

  average() {
    if (this.length > 0){
      return (this.items.reduce (function(acumulator , item){
        return acumulator + item
      }) / this.length)
    }
    throw new Error("EmptySortedList")
  }
};

module.exports = SortedList;
