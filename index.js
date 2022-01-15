class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) =>
       a - b
    )
    this.length = this.items.length
  }

  get(pos) {
    if(!this.items[pos]){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.items.length === 0){
       throw new Error('EmptySortedList');
    } else {
      var max = Math.max.apply(null, this.items);
    }
    return max
  }

  min() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
   } else {
    var min = Math.min.apply(null, this.items)
  }
  return min
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
