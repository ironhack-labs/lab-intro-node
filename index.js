class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let maxValue = this.items[0];
    for (let i = 1; i < this.items.length; i++) {
      if (this.items[i] > maxValue) {
        maxValue = this.items[i];
      }
    }
    return maxValue;
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let minValue = this.items[0];
    for (let i = 1; i < this.items.length; i++) {
      if (this.items[i] < minValue) {
        minValue = this.items[i];
      }
    }
    return minValue;
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    const arrSum = this.items.reduce((a, b) => a + b, 0);
    return arrSum;
  } 

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    let arrAverage = 0;
    for(let i = 0; i < this.items.length; i++){
      arrAverage += this.items[i];
    }
    return arrAverage / this.items.length;
  }
}

module.exports = SortedList;
