class SortedList {
  constructor() {
    this.items = [];
    
  }
  get length() { //getter 
    return this.items.length;
  }
  add(x) {

    this.items.push(x);
    this.items.sort();

  }
  get(pos) {
    // if (this.length >= pos) {
    //   throw new Error("OutOfBounds")
    // } 
     return this.items[pos];
  }
  max() {
    if (this.items == 0) {
      throw new Error("EmptySortedList")

    } else {
      return Math.max(...this.items)
    }
  }
  min() {
    if (this.items == 0) {
      throw new Error("EmptySortedList")

    } else {
      return Math.min(...this.items)
    }

  }
  average() { 
    if (this.items == 0) {
      throw new Error("EmptySortedList")

    } else {
      return this.sum() / this.items.length;  
    }

 
  }
  sum() {
    if (this.items.length == 0) {
      return 0;
    } else {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;

      return this.items.reduce(reducer)
    }
  }
};

module.exports = SortedList;

