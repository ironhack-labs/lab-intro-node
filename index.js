class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => {
    if (a < b) {return -1}
    if (a > b) {return + 1}
    if (a === b) {return 0}
  }) 
  this.length = this.items.length
  }

  // if (pos <= this.items.length - 1)
  get(pos) {
    if (pos >= 0 && pos < this.items.length) {
      return this.items[pos];
    } else {throw new Error ("OutOfBounds")}
  }


  max() {
    if (this.items.length > 0) {
      const maxNumber = this.items[this.items.length -1];
      return maxNumber; 
    } else {  throw new Error("EmptySortedList")}
  }

  min() {
    if (this.items.length > 0) {
    const minNumber = this.items[0];
    return minNumber;
    } else {throw new Error("EmptySortedList")}

  }
  //quiero utilizar reduce array.reduce ((acc, actual => return acc + actual, 0)
  sum() {
    const sumArray = this.items.reduce((accu, actual) => {
    return accu + actual; }, 0);

    return sumArray
  };

  avg() {
    if (this.items.length > 0) {
    const avg = this.sum()/this.items.length
    return avg 
    } else { throw new Error("EmptySortedList")
  } 
}
}

module.exports = SortedList;
