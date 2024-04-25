class SortedList {
  constructor(items =[]) {
    this.items = items;
    this.length = items.length;
  }

  add(item) {
    let left = 0;
    let right = this.items.length;

    // Binary search to find the correct position to insert the new item
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (this.items[mid] < item) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    this.items.splice(left, 0, item);

    // Update the length property
    this.length++;
  
  }

  get(pos) {
    if(pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length-1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items[0];
    }
  }

  sum() {
    return this.items.reduce((acc, curr) => acc +curr, 0);
  }

  avg() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
    return this.sum() / this.items.length;
  }
}
}
module.exports = SortedList;
