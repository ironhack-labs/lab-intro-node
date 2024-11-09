class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
   
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length; 
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) {
      throw new Error("OutOfBounds");
    }
    else {
      return this.items[pos]
    }
  }

  max() {
  if (this.items.length === 0) {
    throw new Error("EmptySortedList");
  }
  else {
   return  Math.max(...this.items);
  }}

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    else {
      return  Math.min(...this.items);
    }
  }

  sum() {
    let sumaTotal = this.items.reduce((a, b) => a + b, 0);
    return sumaTotal
  }

  avg() {
    if(this.items.length == 0){throw new Error("Empty list")}
    return this.items.reduce((sum, value) => sum + value, 0) / this.length;
  }
}

const list = new SortedList();
module.exports = SortedList;