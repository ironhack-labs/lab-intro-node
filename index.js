class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    const searchValue = this.items[pos];
    if ( !searchValue ) {
      throw new Error ("OutOfBounds");
    }
    
    return searchValue;
    
  }

  max() {
    if ( this.length === 0 ) {
      throw new Error("EmptySortedList");
    }

    return Math.max(...this.items);
  }

  min() {
    if ( this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.min(...this.items);
  }

  sum() {
    if ( this.length === 0) {
      return 0; 
    }

    const sum = this.items.reduce((acc, num) => acc + num, 0);
    return sum;
  }

  avg() {
    if ( this.length === 0) {
      throw new Error("EmptySortedList");
    }

    const length = this.items.length;
    const sum = this.sum();
    return sum / length;
  }
}

module.exports = SortedList;


