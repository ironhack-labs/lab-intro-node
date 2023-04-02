class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);

    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.items.length) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    let maxNum = 0;
    if (this.length !== 0) {
      this.items.forEach((num) => {
        if (num > maxNum) {
          maxNum = num;
        }
      });
      return maxNum;
    } else throw new Error("EmptySortedList");
  }

  min() {
    let minNum = this.items[0];
    if (this.length !== 0) {
      this.items.forEach((num) => {
        if (num < minNum) {
          minNum = num;
        }
      });
      return minNum;
    } else throw new Error("EmptySortedList");
  }

  sum() {
    let sum = 0;
    this.items.forEach((num) => {
      sum += num;
    });
    return sum;
  }

  avg() {
    if (this.length !== 0) {
      let result = this.sum() / this.length;
      return result;
    } else throw new Error("EmptySortedList");
  }
}

module.exports = SortedList;
