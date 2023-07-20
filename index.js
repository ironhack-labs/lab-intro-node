class SortedList {
  constructor() {
    
    this.items = [];
    this.length = this.items.length;
    this.itemsOrdered = this.items.sort();
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b)
  }

  get(pos) {
    if (pos >= this.length || pos < 0) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    } else { 
      const max = this.itemsOrdered.length - 1;
      return this.itemsOrdered[max];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.itemsOrdered[0];
    }
  }

  sum() {
    const sum = this.items.reduce((acc, currentElement) => acc + currentElement, 0);
    return sum 
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
  } else {
    return this.sum() / this.length;
  }
  }
}

module.exports = SortedList;
