class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    if (this.length > 1) {
    this.items.sort((a,b) => a - b)
    }
  }

  get(pos) {
    if (pos < this.length) {
        return this.items[pos]
    } else {
      throw new Error ('OutOfBounds')
    }

  }

  max() {
    if (this.length !== 0) {
      return this.items[this.length - 1]
    } else {
      throw new Error ('EmptySortedList')
    }


  }

  min() {
    if (this.length !== 0) {
      return this.items[0]
    } else {
      throw new Error ('EmptySortedList')
    }
  }

  sum() {
    return this.items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)

  }

  avg() {
    if (this.length !== 0){
    const total = this.items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)
    return total / this.length
    } else {
      throw new Error ('EmptySortedList')
    }
  }
}

module.exports = SortedList;
