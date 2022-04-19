class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length = this.items.length;
    return this.items;
  }

  get(pos) {
    this.items.forEach((item) => {
      if (this.items.indexOf(item) === pos) {
        return item[pos];
      } else if (this.items.length < pos) {
        throw new Error("OutOfBounds");
      }
    });
    return this.items[pos];
  }

  max() {
    let maxNum;
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      maxNum = Math.max(...this.items);
    }
    return maxNum;
  }

  min() {
    let minNum;
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      minNum = Math.min(...this.items);
    }

    return minNum;
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    } else {
     let sum = this.items.reduce((acc, item) => acc + item)
     return sum;
    }    
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
  } else {
    let avg = this.sum(this.items) / this.items.length
    return avg
  }
}
}

module.exports = SortedList;
