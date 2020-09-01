class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {

      this.items.push(item)
      this.items.sort(function(a, b) {
        return a - b
        })
      this.length++
  }

  get(pos) {
    if (this.length >= pos) {
      return this.items[pos]
    }
    throw new Error('OutOfBounds');
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    }
    let max = this.items.reduce(function(a,b) {
      return Math.max(a, b)
    })
    return max;

  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    }
    let min = this.items.reduce(function(a,b) {
      return Math.min(a, b)
    })
    return min;
  }
  

  sum() { if (this.items.length === 0) {
    return 0;
  }
  let sum = this.items.reduce((a,b) => {
    return a + b
  })
  return sum
}

  

  avg() { 
    if (this.items.length === 0) {
    throw new Error('EmptySortedList') } 
    else {
    return this.sum() / this.length 
  }
}
}



module.exports = SortedList;
