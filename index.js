class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;

  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length

    this.items.sort((a, b) => {
      return a - b
    })
  }

  get(pos) {
    if (pos > this.length - 1) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      const maxValue = this.items.reduce((a, b) => {
        return Math.max(a, b)
      }, -Infinity)

      return maxValue
    }

  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      const minValue = this.items.reduce((a, b) => {
        return Math.min(a, b)
      }, Infinity)

      return minValue
    }
  }

  sum() {
    if (this.length === 0) {
      return 0
    } else {
      const total = this.items.reduce((a, b) => a + b, 0)
      return total
    }

  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      const total = this.items.reduce((a, b) => {
        return a + b
      }, 0)
      const average = total / this.length
      return average
    }
  }
}

module.exports = SortedList;
