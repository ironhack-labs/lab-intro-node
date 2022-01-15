class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b){return a-b})
    this.length = this.items.length
  }

  get(pos) {
    const index = this.items.indexOf(pos)
    if (index !== -1) {
      return index
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    const maxValue = this.items[this.items.length - 1]
    if (maxValue) {
      return maxValue
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    const maxValue = this.items[0]
    if (maxValue) {
      return maxValue
    } else {
      throw new Error('EmptySortedList');
    }
   }

  sum() { 
    let sum = 0
    this.items.forEach(v => {
      sum += v
    });
    return sum
  }

  avg() { 
    if(this.items.length === 0) {throw new Error('EmptySortedList') }
    let sum = 0
    this.items.forEach(v => {
      sum += v
    });
    const avg = sum / this.items.length
    return avg
  }
}

module.exports = SortedList;
