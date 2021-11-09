class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a,b){
      return a-b
    })
    this.length = this.items.length
  }

  get(pos) {
    
    if (pos > this.length){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }

  }

  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length-1]
    }
  }

  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.items[0]
    }
  }

  sum() {
    if (this.length === 0){
      return 0
    } else {
      return this.items.reduce(function(acc, curr){
        return acc + curr
      },0)
    
    }
    
  }

  avg() {
    if (this.length === 0){
      throw new Error('EmptySortedList');
    } else {
      let sum = this.items.reduce(function(acc, curr){
        return acc + curr
      },0)
     return sum/this.length
    }
  }
}

module.exports = SortedList;
