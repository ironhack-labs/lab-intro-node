class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    })
    this.length ++
  }

  get(pos) {
    if(!this.items[pos]){
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    if(!this.length){
      throw new Error('EmptySortedList');
    }
    return this.items[this.items.length - 1]
  }

  min() {
    if(!this.length){
      throw new Error('EmptySortedList');
    }
    return this.items[0]
  }

  sum() {
    const sum = this.items.reduce(function(a, b) {
      return a + b;
    }, 0)
    return sum
  }

  avg() {
    if(!this.length){
      throw new Error('EmptySortedList');
    }
    const avg = this.items.reduce(function(a, b) {
      return a + b;
    }, 0) / this.items.length
    return avg
  }
}

module.exports = SortedList;
