class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (this.length - 1 >= pos) {
      return this.items[pos];
    }
    throw new Error("OutOfBounds");
  }

  max() {
    const maxValue = this.items.reduce((a, b) => Math.max(a, b))
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return maxValue;
    }
  }

  min() {
    const minValue = Math.min(...this.items)
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return minValue;
    }
  }

  sum() {
    return this.items.reduce((acc, item) => acc + item, 0)
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList')
      } else {
        return this.sum()/this.items.length
      }
  }
}

module.exports = SortedList;
