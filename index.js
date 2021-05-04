class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
    this.error = new Error('EmptySortedList')
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if(this.items.indexOf(this.items[pos]) != -1){
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if(this.items.length > 0){
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList')
    }
  }

  min() {
    if(this.items.length > 0){
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList')
    }
  }

  sum() {
    let sum = this.items.reduce(((acc, value) => acc + value), 0)

    return sum    
  }

  avg() {
    let avr = this.sum()/this.items.length
    if(this.items.length > 0){
      return avr
    } else{
      throw new Error('EmptySortedList')
    }
  }
}

module.exports = SortedList;
