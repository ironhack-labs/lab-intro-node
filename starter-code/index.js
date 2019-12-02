class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    let sortedItems = this.items.sort((a, b)=>{return a-b})
    this.length = sortedItems.length
  }

  get(pos) {
    if(pos = this.items[pos]){
      return this.items[pos]
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    let max = this.items.sort((a, b)=>{return b-a})
    if(max.length > 0){
      return this.items[0]
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
