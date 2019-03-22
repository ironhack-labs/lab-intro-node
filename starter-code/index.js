class SortedList {

  constructor() {
    this.items=[];
    this.length=this.items.length;
  }


  add(item) {
    // this.items.push(item);
    // this.length++;
    // this.items.sort((a,b)=>a-b);
    this.items = [...this.items, item]
    this.items.sort((a , b) => a-b);
    this.length = this.items.length
  }

  get(pos) {
    // if (this.length > pos){
    //   return this.items[pos];
    // } else {
    //   throw new Error ("OutOfBounds");
    // }
    if (this.items[0] != 0) this.items = [0, ...this.items]
    return this.items[pos]
  }

  max() {
  if (this.length == 0) {
    throw new Error("EmptySortedList");
  } else {
    let max = Math.max(...this.items);
    return max;
  }
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }

  average() {
    let avr;
    if (this.sum() == 0) {
      throw new Error("EmptySortedList");
    } else {
      avr = this.sum() / this.length;
      return avr;
    }
  }

  sum() {
    let sum;
    if (this.length == 0) {
      sum = 0;
    } else {
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      sum = this.items.reduce(reducer);
    }

     return sum;
  }
};

module.exports = SortedList;
