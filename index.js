class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
    if(pos >= 0 && pos < this.length){
    return this.items[pos]
  }
  else {
    throw new Error("OutOfBounds");
  }
  }

  max() {
    if(this.items.length > 0){
      const highestItem = this.items.length - 1
      return this.items[highestItem]
    }
    else{
      throw new Error("EmptySortedList") 
    }
  }

  min() {
    if(this.items.length > 0){
      return this.items[0]
    }
    else{
      throw new Error("EmptySortedList") 
    }
  }

  sum() {
    return this.items.reduce((acc, currentValue) => acc + currentValue, 0);
  }

  avg() {
    if(this.items.length > 0){
    return this.sum() / this.items.length
  }
    throw new Error("EmptySortedList") 
  }
}

module.exports = SortedList;
