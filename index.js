class SortedList {

  constructor() {
    //this.SortedList = new SortedList()
    this.items = []
    this.length = this.items.length
  }

  add(item) {

    this.length = this.items.push(item)
    //this.items.sort()
    this.items.sort(function (a, b) {
      return a - b
    })
  }

  get(pos) {
    if (this.items.at(pos) === undefined) {
      throw new Error('OutOfBounds');
    }
    return this.items.at(pos);
  }

  max() {

    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    return Math.max(...this.items)

  }
  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items)
  }


  sum() {
    
    if (this.length === 0) {
      return 0
    }
    
    return this.items.reduce(function (sum, val) {
     return sum + val
    })
    
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }

    return this.sum() / this.length
   
  }
}

module.exports = SortedList;
