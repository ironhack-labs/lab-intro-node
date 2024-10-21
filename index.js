class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b);
    this.length++
    return this.items
  }

  get(pos) {
    if (pos <= this.length){
      return this.items[pos];
    } else {
      throw new Error("OutOfBounds");
    } 
  }

  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...(this.items))
    }
  }

  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...(this.items));
    }
  }

  sum() {
    let sum = 0;
    for (let i=0; i<this.length; i++){
      sum += this.items[i];
    }
    return sum
  }

  avg() {
    if (this.length > 0) {
      let sum = 0;
      for (let i=0; i<this.length; i++){
        sum += this.items[i];
      }
    return sum/this.length;
  } else if (this.length === 0) {
    throw new Error("EmptySortedList");
  }
}
}

module.exports = SortedList;

