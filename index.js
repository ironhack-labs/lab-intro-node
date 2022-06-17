class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length) {
      return this.items.reduce((highestNumber, actualNumber) => {
        return highestNumber = highestNumber < actualNumber ? actualNumber : highestNumber;
      },0);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length) {
      return this.items.reduce((highestNumber, actualNumber) => {
        return highestNumber = highestNumber > actualNumber || !highestNumber ? actualNumber : highestNumber;
      },0);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    return this.items.reduce((highestNumber, actualNumber) => {
      return highestNumber + actualNumber;
    },0);
  }

  avg() {
    if (this.length) {
      return this.sum() / this.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
