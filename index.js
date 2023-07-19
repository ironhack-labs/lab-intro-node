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
    if (pos >= 0 && pos < this.length) {
      return this.items[pos];
    } else {
      throw new OutOfBoundsException("Position is out of bounds");
    }
  }

  max() {
    if (this.length === 0) {
    throw new EmptySortedList("Empty SortedList");
    }
    return this.items[this.length -1];
  }

  min() {
    if (this.length === 0) {
      throw new EmptySortedList("Empty SortedList");
    }
    return this.items[0];
  }

  sum() {
    let sum = 0;
    for(let i = 0; i < this.length; i++){
      sum += this.items[i];
    }
    return sum;
  }

  avg() {
    if (this.length === 0) {
      throw new EmptySortedList("Empty StordList");
    }
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
