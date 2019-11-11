class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a, b) => a - b)
  }
  get(pos) {
 
    return this.items[pos]
  }
  max() {
    if(this.length){
      return this.items[this.length-1]

    }else{
   throw new Error("EmptySortedList")
    }
  }
  min() {
    if (this.length) {
      return this.items[0]

    } else {
      throw new Error("EmptySortedList")
    }
  }
  average() {
    let sum = 0
     if (this.length) {
       return this.sum()/this.length
      
          } else {
       throw new Error("EmptySortedList")
     }
  }
  sum() {
    let sum=0
    this.items.forEach(elm => {
      sum+=elm
    })
    return sum
  }
};

module.exports = SortedList;