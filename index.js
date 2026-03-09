class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length
  }

  get(pos) {
    if (this.items[pos] === undefined) throw new Error("outOfBounds");

    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) throw new Error("EmptySortedList");

    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) throw new Error("Empty SortedList");

    return Math.min(...this.items);
  }

  sum() {
    let sum = 0

    this.items.forEach((num) => {
      sum += num
    })
    return sum
  }

  avg() {
    if (this.items.length === 0) throw new Error('EmptySortedList');

    let sum = 0

    this.items.forEach((num) => {
      sum += num
    })

    const avarage = sum / this.items.length
    return avarage
  }

}

module.exports = SortedList;
