class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (this.length === 0) {
      this.items.push(item);
      this.length++;
    } else {
      for (let i = 0; i < this.length; i++) {
        if (item > this.items[i]) {
          this.items.splice(i - 1, 0, item);
          this.length++;
        } else {
          this.items.push(item);
          this.length++;
        }
      }
    }
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    let maxNumber = this.items[0];
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] > maxNumber) {
          maxNumber = this.items[i];
        }
      }
      return maxNumber;
    }
  }

  min() {
    let minNumber = this.items[0];
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] < minNumber) {
          minNumber = this.items[i];
        }
      }
      return minNumber;
    }
   }

  sum() {
    let sum = 0;
    if (this.items === 0) {
      return 0;
    } else {
      for (let i=0; i<this.items.length; i++) {
        sum += this.items[i];
      }
    }
    return sum;
   }

  avg() {
    let average = 0;
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      average = this.sum/(this.items.length - 1);
      return average;
    }
   }
}

module.exports = SortedList;
