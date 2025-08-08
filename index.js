class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b)
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= 0 && pos <= this.length - 1) {
      return this.items[pos];}
    else {throw new Error("OutOfBounds");}
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1]
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0]
    }
  }

  sum() {
    let sum = 0;
    for(let i = 0; i <= this.length; i++) {
      sum += i;
    }
    return sum
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let sum = 0;
      for(let i = 0; i <= this.length; i++) {
        sum += i;
      }
      return sum / this.length;
    }
  }
}

module.exports = SortedList;
