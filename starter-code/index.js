class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length++;
  }
  get(pos) {
    
    if (pos > this.items.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos - 1];
    
  }
  max() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((acc, current) => {
        return Math.max(acc, current);
      });
    }
  }
  min() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((acc, current) => {
        return Math.min(acc, current);
      });
    }
  }

  average() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((acc, current) => acc + current) / this.length;
    }

  }

  sum() {
    if (this.length <= 0) {
      return 0;
    } else {
      return this.items.reduce((acc, current) => acc + current);
    }
  }
};

module.exports = SortedList;

