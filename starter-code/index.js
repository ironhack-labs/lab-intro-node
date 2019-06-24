class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
    
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b) => (a-b));
  }

  get(pos) {
    this.length = this.items.length
    return this.items[pos-1];
    
  }

  max() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    }
    else return Math.max(...this.items)
    
  }

  min() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    }
    else return Math.min(...this.items)
    
  }

  sum() {
    return this.items.reduce((acum, sumElem) => acum + sumElem, 0);
  }

  average() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    }
    else return this.sum()/this.length;
  }

};

module.exports = SortedList;
