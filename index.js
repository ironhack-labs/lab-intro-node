class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length += 1;
    this.items.sort((a, b) => a-b)
  }

  get(pos) {
    if(this.length < pos) {
      throw new Error ("OutOfBounds")
    }
    return this.items[pos]
  }

  max() {
    if(this.length === 0) {
      throw new Error ("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
if (!this.length) {
  throw new Error ("EmptySortedList");
}
return Math.min(...this.items);
  }

  sum() {
    if (!this.length) {
      return 0;
    }
    const total = this.items.reduce((acc, value) => {
      return acc + value;
    }, 0)
return total
  }

  avg() {
    if (!this.length) {
      throw new Error ("EmptySortedList");
    }
    return this.sum() / this.length
  }
}

module.exports = SortedList;
