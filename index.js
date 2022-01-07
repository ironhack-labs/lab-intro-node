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
    // let max = Number.MIN_SAFE_INTEGER;
    // this.items.forEach((number) => {
    //   if (number >= max){
    //     max = number;
    //   }
    // })
    // return max
    console.log(...this.items)
    console.log(Math.max(...this.items))
    return Math.max(...this.items)
  }

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
