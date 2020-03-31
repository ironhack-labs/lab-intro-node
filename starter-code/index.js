class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.length++
    this.items.sort((a, b) => {
      return a - b
    })
   

  }

  get(i) { 
      if ( i > this.length - 1) {
        throw new Error("OutOfBounds")
      } else {
        return this.items[i]
      }
  }
  
  max() {
    if (this.length === 0) { throw new Error('EmptySortedList') }
    return this.items[this.items.length -1]
   }

  min() {
    if (this.length === 0) { throw new Error('EmptySortedList') }
    return this.items[0]
   }

  sum() {
    return this.items.reduce((sum, el) => sum + el, 0)
   }

  avg() { 
    if (this.length === 0) { throw new Error('EmptySortedList') }
        return  this.sum / this.length
    }
}

module.exports = SortedList;
