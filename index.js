class SortedList {
  constructor() {
    this.items = [] //items should be an array
    this.length = this.items.length //should be the number of elements in the array
  }

  add(item) {
    this.items.push(item) //add value item to the items array
    this.items.sort((a, b) => a - b)// ensuring that the items array stays sorted in ascending order
    this.length = this.items.length
  }

  get(pos) {
    if (pos > this.items.length){
      throw new Error('OutOfBounds'); //make sure you throw an error with the message OutOfBounds if a user tries to get an element in the non-existing position
    }else{
      return this.items[pos];
    }

  }

  max() {
    if(this.length == 0){
      throw new Error('EmptySortedList');//In case you have an empty SortedList, you must throw an error with the message "EmptySortedList".
    }else{
      return Math.max(...this.items)
    }
  }

  min() {
    if(this.length == 0){
    throw new Error('EmptySortedList');
    }else{
      return this.items[0]
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
