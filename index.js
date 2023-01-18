class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length += 1;
    this.items.sort(function (a, b) {
      return a - b
    });
    return this.items
  }
  //By default, the sort() function sorts values as strings.
  //However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
  //Because of this, the sort() method will produce incorrect results when sorting numbers.
  //Can fix this by providing a compare function


  get(pos) {
    if (pos <= this.items.length) {
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if (this.items.length <= 0) {
      throw new Error('EmptySortedList')
    } else {
      let maxValue = this.items.reduce((a, b) => Math.max(a, b), -Infinity);
      return maxValue
    }
  }
  /*max() { 
    if (this.items.length <= 0){
      throw new Error('EmptySortedList')
    } else {
     let maxValue = Math.max(...this.items)
     return maxValue 
    }
  }*/                              //is the same as previous one, but only can use for short numbers of array, not infinity arrays of number.


  min() {
    if (this.items.length <= 0) {
      throw new Error('EmptySortedList')
    } else {
      let minValue = Math.min(...this.items)     //Spread Operator (...)
      return minValue
    }
  }

  sum() {
    if (this.items.length <= 0) {
      return 0
    } else {
      let totalSum = this.items.reduce((partialSum, a) => partialSum + a)
      return totalSum
    }
  }

  avg() { 
    let average = this.items.reduce((partialSum, a) => partialSum + a)/this.items.length
    return average
  }
  /*avg() { 
    let average = this.sum()/this.items.length
    return average
  }*/
}

module.exports = SortedList;
