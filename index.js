class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);

    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length || pos < 0) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length >= 0) {
      let highest = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (highest < this.items[i]) {
          highest = this.items[i];
        }
      }
      return highest;
    } else{
      throw new Error("EmptySortedList");
    }
    
  }

  min() {
    if (this.items.length >= 0) {
      return this.items[0];
    } else{
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.items.length >= 0) {
      let sum = 0;
      for (let i = 0; i < this.items.length; i++) {
        sum = sum + this.items[i];
      }
      return sum;
    } else {
      return 0;
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let sum = 0;
      for (let i = 0; i < this.items.length; i++) {
        sum = sum + this.items[i];
      }
      return sum / this.items.length;
    }
  }
}

module.exports = SortedList;
