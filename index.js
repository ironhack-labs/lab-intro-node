class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = 0
  }
  
  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => (a-b))
    this.length++
  }


  get(pos) {
    if (pos > this.items.length) {
      throw new Error ("Out of Bounds")
    } 
      return this.items[pos]
    }
  
  max() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList') 
    }
    return this.items.sort((a, b) => (a - b))[this.length - 1];
  }
  
  min() {
    if(this.items.length === 0) {
      throw new Error('EmptySortedList')
    }
    return this.items.sort((a, b) => (b - a))[this.length - 1]
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    }
    return this.items.reduce((a,b) => a + b, 0)
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    }
   return this.items.reduce((a, b) => a + b, 0) / this.items.length 
  }
}


module.exports = SortedList;
