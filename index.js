class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a - b)  
    this.length = this.items.length
  }

  get(pos) {
    let position = this.items[pos]
    if (pos > this.length-1){
      throw new Error('OutOfBounds')
    } else {
      return position
    }
  }

  max() {
    if (this.length == 0){
      throw new Error('EmptySortedList')
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.length == 0){
      throw new Error('EmptySortedList')
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    let sum = this.items.reduce((acc, cv) => {
        return acc + cv
        })
    if (this.length == 0){
      return 0
    } else {
    return sum
    }
  }

  avg() {
    // let average = this.items.reduce((acc, cv) => {
    //   return acc + cv
    // }, 0)/this.length
    let avg = this.items.reduce((acc, cv) => {
      return acc + cv
      }, 0)/this.length
    if (this.length == 0){
      throw new Error('EmptySortedList')
    } else {
    return avg
    }
  }
}

module.exports = SortedList;
