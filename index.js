class SortedList {
  constructor(items,length) {
    this.items = []
    this.length = 0

  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    return this.items.sort((a,b) => a-b)
  }

  get(pos) {
    if(pos > this.length) {
      throw new Error('OutOfBounds');
    }
    
    return this.items.indexOf(pos)
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max.apply(null, this.items)
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min.apply(null, this.items) 
  }

  sum() {
    if (this.length === 0) {
      return 0
    }

    let totalSum = 0
    this.items.forEach((element => totalSum += element))
    return totalSum
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items.reduce((a, b) => a + b) / this.length;
    
  }
}

module.exports = SortedList;
