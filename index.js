class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length;
    this.items.sort((a, b) => a - b
    )

  }

  get(pos) {
    if (pos > this.length - 1) {
      throw new Error('Out of Bounds')
    }
    return this.items[pos]

  }

  max() {
    if(this.length === 0){
      throw new Error('Empty Sorted List')
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if(this.length === 0){
      throw new Error('Sorted List')
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    return this.items.reduce(((acc, current) => acc + current), 0)

  }

  avg() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList')
    } else{
      return this.sum()/this.items.length
    }

  }
}

module.exports = SortedList;