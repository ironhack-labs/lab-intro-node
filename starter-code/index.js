class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
  this.items.push(item);
  this.items.sort((a, b) =>  a - b);
  this.length = this.items.length;
  };
  

  get(pos) {
    if (this.items[pos] === undefined) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
   
  }

  max() {

    let highestNum = this.items.sort((a, b) => b - a);

    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return highestNum[0];
  };
}

  min() {

    let highestNum = this.items.sort((a, b) => b - a);

    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return highestNum[this.items.length-1];
  };
  }

  sum() {

    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    if(this.items.length == 0) {
      return 0;
    } else {
    
    return this.items.reduce(reducer);
    };
  }

  avg() {
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let totalSum = this.items.reduce(reducer);
    return totalSum / this.items.length; 
  }
}

module.exports = SortedList;
