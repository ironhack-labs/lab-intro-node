class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) =>  a - b)
    this.length = this.items.length
  }

  get(pos) {
    if(pos > this.items.length){
      throw new Error('OutOfBounds'); 
    }
    return this.items[pos]
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items)  //other option: reuse sort-method above
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items)  //other option: reuse sort-method above
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
