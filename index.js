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
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let maxNum = this.items[0];
      this.items.forEach((element) => {
        if (element > maxNum) {
          maxNum = element;
        }
      });
      return maxNum;
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let minNum = this.items[0];
      this.items.forEach((element) => {
        if (element < minNum) {
          minNum = element;
        }
      });
      return minNum;
    }
  }

  sum() {
    const total = this.items.reduce((accumulator, element) => {
      return accumulator + element;
    }, 0);
    return total;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
