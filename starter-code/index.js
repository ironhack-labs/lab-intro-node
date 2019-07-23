class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    let x = 0;
    let sum = 0;

    if (this.items.length > 0) {
      let sum = this.items[x];

      while (x < this.items.length) {
        if (sum < this.items[x]) {
          sum = this.items[x];
        }
        x++;
      }
      return sum;
    } else {
      throw new Error("EmptySortedList");
    }
  }
  min() {
    let x = 0;

    let sum = this.items[x];
    if (this.items.length > 0) {
      while (x < this.items.length) {
        if (this.items[x] < sum) {
          sum = this.items[x];
        }
        x++;
      }
      return sum;
    } else {
      throw new Error("EmptySortedList");
    }
  }
  average() {
    let x = 0;
    let sum = 0;
    if (this.items.length > 0) {
      while (x < this.items.length) {
        sum += this.items[x];

        x++;
      }
      return sum / this.items.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
  sum() {
    let x = 0;
    let sum = 0;
    if (this.items.length > 0) {
      while (x < this.items.length) {
        sum += this.items[x];

        x++;
      }
      return sum;
    } else {
      return 0;
    }
  }
}

module.exports = SortedList;
