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

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
