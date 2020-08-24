class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
    
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a -b)
    this.length = this.items.length
  }

  get(pos) {
    if (this.items[pos] === undefined){
      throw new Error('OutOfBounds')}
    else {
      return this.items[pos]
    }
  }

  max() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList')
    }
    else{
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList')
    }
    else{
      return Math.min(...this.items)
    }
  }

  sum() {
    if (this.items.length === 0){
      return 0
    }
    else{
      return this.items.reduce((a, b) => 
        a + b)
    }
  }

  avg() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList')
    }
    else{
      return this.items.reduce((a, b) => 
        a + b) / this.items.length
    }
  }
}

module.exports = SortedList;
