class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length

  }

  add(item) {
      if(!this.items.includes(item) && item >=0) {
        this.items.push(item);
        this.items.sort((a, b) => a - b);
      }
    }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("Out of Bounds");
    }
    return this.items[pos];
  }


  max() {
    if (this.items.length === 0) {
      throw new Error("Empty Sorted List")
    }
    return Math.max(this.items)
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("Empty Sorted List")
    }
    return Math.min(this.items)
  }

  sum() {
    const result = this.items.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return result
  }

  avg() {
    if (this.length === 0) {
      throw new Error("Empty Sorted List")
    }
    return this.sum() / this.items.length
  }
}

module.exports = SortedList;
