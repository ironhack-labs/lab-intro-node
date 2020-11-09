class SortedList {
  constructor(items, length) {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item); 
    this.items.sort((a, b) => a - b);
    this.lenght = this.items.length;
  }

  get(pos) {
    if (!this.items[pos]){
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.lenght == 0){
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
    
    
  }

  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
