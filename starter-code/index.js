class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort()
    this.length = this.items.length
  }

  get(pos) {
    return this.items[pos - 1]    
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList")

    return Math.max(...this.items)
  }
  min() {
    if (this.length === 0) throw new Error("EmptySortedList")

    return Math.min(...this.items)
  }
  average() {
    if (this.length === 0) throw new Error("EmptySortedList")

    const sum = this.items.reduce((accumulator, num) => {
      return accumulator + num
    }, 0) 

    return sum / this.length
  }
  sum() {
    if (this.length === 0) return 0;

    return this.items.reduce((ac, num) => ac + num)
  }
};

module.exports = SortedList;
