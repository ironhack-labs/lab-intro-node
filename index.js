class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.items.length) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    if (!this.items.length) throw new Error ('EmptySortedList');
    let max = Number.MIN_SAFE_INTEGER;
    console.log(max)
    this.items.forEach((number) => {
      if (number >= max){
        max = number;
      }
    })
    console.log(max)
    return max
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
