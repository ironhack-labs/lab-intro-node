class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    if (item !== undefined) {
      this.items.push(item)
      this.length = this.items.length
      this.items.sort((a, b) => a - b);
    }
    return this.items
  }

  get(pos) {
    if (this.length < pos) {
      throw new Error('OutOfBounds');
     }
     else{
       return this.items[pos];
     }
  }

  max() {
    if (this.length === 0) {
      throw new Error ("EmptySortedList");
    } 
    else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error ("EmptySortedList");
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    return this.items.reduce((acc, val) => acc + val, 0)
  }

  avg() {
    if (this.length === 0) {
      throw new Error ("EmptySortedList");
    } 
    return this.sum()/this.length
  }
}

module.exports = SortedList;
