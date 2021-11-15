class SortedList {
  constructor(items,length) {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
      this.items.unshift(item)
      this.length = this.items.length
      this.items.sort((a,b) => a - b)
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    } else{
      return this.items[pos];
    }
  }

  max() {
    if (this.length > 0) {
      return Math.max.apply(null, this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length > 0) {
      return Math.min.apply(null, this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.length <= 0) {
      return 0
    } else {
      let sumArr = this.items.reduce((acc, valActual) =>{
         return acc + valActual
      })
      return sumArr
    }
  }

  avg() {
    if (this.length <= 0) {
      throw new Error('EmptySortedList');
    } else {
      let sumArr = this.items.reduce((acc, valActual) =>{
         return acc + valActual
      })
      return sumArr/this.length
    }
  }
}

module.exports = SortedList;
