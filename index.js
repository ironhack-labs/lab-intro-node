class SortedList {
  constructor(items, length) {

    this.items = []
    this.length = 0
  }

  add(item) {

    this.items.push(item);

    this.items.sort((a, b) => a - b);

    this.length = this.items.length;

  }

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error("OutOfBounds"); 
    } else if (this.items[pos]) {
      return this.items[pos];
    }
    
  }

  max() {
    if (this.items.length > 0) {
        this.items.sort((a, b) => a - b);
        return this.items[this.items.length - 1];
    } else {
        throw new Error("EmptySortedList");
    }
}

  min() {

    if (this.items.length > 0) {
      this.items.sort((a, b) => a - b);
      return this.items[0];
    } else {
      throw new Error("Empty SortedList");
  }

  }

  sum() {
    return this.items.reduce((acc, value) => acc + value, 0);
  }

  avg() {
    

    if (this.items.length > 0) {
      let sum = this.items.reduce((acc, value) => acc + value, 0)
      return sum / this.items.length
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;
