class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function (a, b) {
      return a - b
    })
  }
  get(pos) {
    return this.items[pos - 1]
  }
  max() {
    if (this.items.length == 0) throw new Error("EmptySortedList")
    else return Math.max.apply(null, this.items)
  }
  min() {
    if (this.items.length == 0) throw new Error("EmptySortedList")
    else return Math.min.apply(null, this.items)
  }
  average() {
    if (this.items.length == 0) throw new Error("EmptySortedList")
    let average = (this.sum() / this.items.length)
    return average
  }
  sum() {
    let total = 0;
    if (this.items.length == 0) return 0
    this.items.forEach(function (item) {
      total += item
    })

    return total
  }
};

module.exports = SortedList;
