let highest = 0;

class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length += 1;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    if (this.items == 0) {
      throw new Error('EmptySortedList');
    } else {
      this.items.forEach(num => {
        if (num > highest) {
          highest = num;
        }
      });
      return highest;
    }
  }

  min() {
    if (this.items == 0) {
      throw new Error('EmptySortedList');
    } else {
      let lowest = highest;
      this.items.forEach(num => {
        if (num < lowest) {
          lowest = num;
        }
      });
      return lowest;
    }
  }

  average() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      let sum = this.items.reduce((total, num) => {
        return total + num;
      });
      return sum / this.length;
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      let sum = this.items.reduce((total, num) => {
        return total + num;
      });
      return sum;
    }
  }
}

module.exports = SortedList;
