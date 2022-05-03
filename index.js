class SortedList {
  constructor(items, length) {
  this.items = [];
  this.length = this.items.length
  
  }

  add(item) {
    this.items.push(item)
    this.items.sort()

  }

  get(pos) {
    
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList')
  } else {
    return Math.max(this.items)
  }
}

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList')
  } else {
    return Min.max(this.items)
  }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
