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

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
