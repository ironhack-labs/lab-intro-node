class SortedList {
  constructor() {
    this.item = [],
    this.length= 0
  }

  add(item) {
    this.item.push(item)
    this.length ++
    if (this.length > 1)return this.items.sort((a,b) => a - b)
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
