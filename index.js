class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    let position;
    if(this.length < pos) {
      throw new Error('OutOfBounds')
    } else {
      position = this.items[pos];
      return position
    }
  }

  max() {
    if(this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      let max = 0;
      this.items.forEach(e => {
        if(max < e) {
          max = e
        }
      })
      return max
    }
  }

  min() {
    if(this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      let min = this.items[0]
      this.items.forEach(e => {
        if(min > e) {
          min = e
        }
      })
      return min
    }
  }

  sum() {
    if(this.length === 0) {
      return 0
    } else {
      let sum = 0
      this.items.forEach(e => {
        sum += e
      })
      return sum
    }
  }

  avg() {}
}

module.exports = SortedList;
