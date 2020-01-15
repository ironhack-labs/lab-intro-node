class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => {
      return a-b;
    });
    this.length++;
  }

  get(pos) {
    let value = this.items[pos];
    if(value === undefined) {
      throw new Error("OutOfBounds");
    } else {
      return value;
    }
  }

  max() {
    let highestValue = Math.max(...this.items);
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return highestValue;
    }
  }

  min() {
    let lowestValue = Math.min(...this.items);
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return lowestValue;
    }
  }

  sum() {
    if(this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((acc, currentvalue) => {
        return acc + currentvalue;
      },0);
    }
  }

  avg() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return (this.sum() / this.length).toFixed(2);
    }
  }
}

module.exports = SortedList;
