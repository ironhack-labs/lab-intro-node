class SortedList {
  constructor() {
    this.items = [] //items should be an array
    this.length = this.items.length //should be the number of elements in the array
  }

  add(item) {
    this.items.push(item) //add value item to the items array
    this.items.sort()// ensuring that the items array stays sorted in ascending order
    this.length = this.items.length
  }

  get(pos) {
    if (this.items[pos] === undefined){
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos];
    }

  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items[this.length - 1]
    }
  }

  min() {
    if(this.length === 0){
    throw new Error('EmptySortedList');
    }else{
      return this.items[0]
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
