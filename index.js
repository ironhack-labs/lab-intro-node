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
    if (this.isValidPosition(pos)) {
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  isValidPosition(pos) {
    return pos >= 0 && pos < this.items.length;
  }

  max() {
    if (this.items.length > 0) {
      return this.items[this.items.length - 1];
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.items.length > 0) {
      return this.items[0];
    } else {
      throw new Error("EmptySortedList");
    } 
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue);
  };

  avg() {
    if (this.items.length > 0) {
      return this.sum() / this.items.length;
    } else {
      throw new Error("EmptySortedList");
    }
    
  }

}

module.exports = SortedList;
