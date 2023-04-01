class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;

  }

  add(item) {
    this.items.push(item)

    let sortedItems = this.items.sort(function(a,b) {
      if (a<b) return -1
      if (a>b) return 1
      if (a=b) return 0
      
      return sortedItems
    })

    this.items.length = sortedItems.length
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;

