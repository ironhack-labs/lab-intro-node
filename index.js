class SortedList {
  constructor(items, length) {
    this.items = [],
    this.length =this.items.length
  }

  add(item) {
    const list = this.items.push(item)
    list.sort(function(a, b) {
      return a - b
    })
    this.length = list.length
    return list
  }

  get(pos) {
    if (pos > this.items.length-1) {
      return 'OutOfBounds'
    }
    return this.items[pos]
  }

  max() {
    if (this.length = 0) {
      return 'EmptySortedList'
    }
    this.items.sort(function(a, b) {
      return a - b
    })
    return this.items[0]
  }

  min() {
    if (this.length = 0) {
      return 'EmptySortedList'
    }
    this.items.sort(function(a, b) {
      return a - b
    })
    return this.items[-1]
  }

  sum() {
    let sum = 0;
    forEach (this.items, function(num) {
      sum += num
    })
    return sum
  }

  avg() {
    let sum = 0;
    forEach (this.items, function(num) {
      sum += num
    })
    return sum/this.length
  }
}

module.exports = SortedList;
