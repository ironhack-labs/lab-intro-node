class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a,b) => a - b);
    this.length = this.items.length;

  }

  get(pos) {

    if (pos > this.length - 1) {
      throw new Error("OutOfBounds");
    }

    return this.items[pos];

  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    };

    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) {
      throw new Error("Empty SortedList");
    };

    return Math.min(...this.items);
  }
  

  sum() {
    let sumItems = 0;

    if (this.length === 0) {
      return sumItems
    }

    this.items.forEach((number) => {
      sumItems += number; 
    });
    
    return sumItems;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }

    return this.sum()/ this.length
  }

}

module.exports = SortedList;
