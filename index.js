class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items = this.items.sort((a, b) => a - b)
    this.length = this.items
  }

  get(pos) {
    if (this.items < 0 || this.items.length === 0 || pos > this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items.reduce((maxSeenSoFar, currentValue) => {
        return (maxSeenSoFar > currentValue ? maxSeenSoFar : currentValue)
      }, Number.MIN_SAFE_INTEGER)
    }
  }

  /*     max() {
        if (this.items.length === 0) {
          throw new Error('EmptySortedList');
        } else {
          return this.items[this.items.length - 1]
        }
      } */


  /*   max() {
      if (this.items.length === 0) {
        throw new Error('EmptySortedList');
      } else {
        return Math.max(...this.items)
      }
    } */

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return this.items.reduce((minSeenSoFar, currentValue) => {
        return (minSeenSoFar < currentValue ? minSeenSoFar : currentValue)
      }, Number.MAX_SAFE_INTEGER)
    }
  }
  
 /*  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0]
    }
  } */

  /*  min() {
     if (this.items.length === 0) {
       throw new Error('EmptySortedList');
     } else {
       return Math.min(...this.items)
     }
   } */

  sum() {
    return this.items.reduce((sum, next) => sum + next, 0)
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.items.length
    }
  }
}

module.exports = SortedList;