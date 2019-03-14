class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length
  }
  add(item) {
     this.items.push(item)
     this.items.sort((a, b) => a - b);
     this.length++
  }
  get(pos) {
    pos--
    return this.items[pos]
  }
  max() {
    if(this.items.length == 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[this.length -1]
    }
  }
  min() {
    if(this.items.length == 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[0]
    }
  }
  average() {
    if(this.items.length == 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.sum() / this.items.length
    }
  }
  sum() {
    return (this.length == 0 ) ? 0 : this.items.reduce((accumulator, currentValue) => accumulator + currentValue) 
  }
};

module.exports = SortedList;
