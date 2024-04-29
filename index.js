// git commit -m "done"

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.length ++;
    this.items.push(item);
    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if (this.items[pos] === undefined) {
       throw new Error("OutOfBounds") }
    else {
       return this.items[pos]}
    }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    else 
      return this.items[this.items.length-1]
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    else 
     return this.items[0]
  }

  sum() {
    return this.items.reduce( (acc, curr) => acc + curr, 0)
  }

  avg() {
    if (this.length === 0) {
     throw new Error("EmptySortedList") 
    }
    return this.items.reduce( (acc, curr) => acc + curr, 0) / this.items.length
  }
}

module.exports = SortedList;
