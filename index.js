class SortedList {
  constructor(items, length, sum) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b )
    this.length = this.items.length
  }

  get(pos) {
    if(this.items[pos]) {
      return this.items[pos]
    } else {
      throw new Error("OutOfBounds")
    }
  }

  max() {
    if(this.items.length > 0){
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if(this.items.length > 0){
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
      let sum = 0
      for (let i = 0; i < this.items.length; i += 1) {
      sum += this.items[i]
      }
      return sum
    }

  avg() {
    let sum = 0
      if (this.items.length === 0) {
        throw new Error('EmptySortedList');
      } else {
        for (let i = 0; i < this.items.length; i += 1) {
      sum += this.items[i]
      }
      let average = sum / this.items.length;
    return average
  }
}
}
module.exports = SortedList;
