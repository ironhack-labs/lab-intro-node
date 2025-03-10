class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length){
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.length-1];
  }

  min() {    
  if (this.length === 0) {
    throw new Error("EmptySortedList");
  }
  return this.items[0];
}

  sum() {
    let totalSum = 0;
    for (let i =0; i <= this.length - 1; i++){
      totalSum += this.items[i];
    }
    return totalSum;
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length;
  }
}  

module.exports = SortedList;
