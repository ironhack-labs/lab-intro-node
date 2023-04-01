class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (item < this.items[0]) {
      this.items.unshift(item);
    } else if (item > this.items[this.length - 1]) {
      this.items.push(item);
    } else {
      for (let i = 0; i <= this.length; i++) {
        if (item >= this.items[i] && item <= this.items[i + 1]) {
          this.items.splice(i + 1, 0, item);
        }
      }
    }
    this.length = this.items.length;
  }

  get(pos) {
    if (pos + 1 <= this.length) {
      return this.items[pos];
    } else throw new Error("EmptySortedList");
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
    let minNum = this.length[0];
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
