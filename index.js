const emptyListError = new Error("EmptySortedList"); 

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {

    this.items.push(item);
    this.items.sort((a,b) => a - b)
    this.length = this.items.length;
  
  }

  get(pos) {

    if (pos > this.length) throw new Error("OutOfBounds");

    return this.items[pos];
    
  }

  max() {

    if (this.length === 0)  throw emptyListError;

    return Math.max(...this.items)
  }

  min() {

    if (this.length === 0)  throw emptyListError;

    return Math.min(...this.items)
  }

  sum() {

    return this.items.reduce((sum,val) => sum + val, 0);
  }

  avg() {

    if (this.length === 0) throw emptyListError;

    return this.sum() / this.length;
  }
}

module.exports = SortedList;
