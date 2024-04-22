class SortedList {
  constructor() {
    this.items = []; // add new array
    this.length = 0; // initialized as number
  }

  add(item) {
    this.items.push(item); // add item to items
    this.items.sort((a, b) => a - b); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0) { // less than 0 => Error
      throw new Error("OutOfBounds");
    }
    if (pos >= this.length) { // bigger than index number => Error
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) { // check inputs
      throw new Error(`EmptySortedList`);
    }
    return this.items[this.length - 1]; // return => max index number.
  }

  min() { 
    if (this.length === 0) { // check inputs
      throw new Error(`EmptySortedList`);
    }
    return this.items[0]; // return => min index number.
  
  }

  sum() { 
    return this.items.reduce((acc, cur) => acc + cur, 0);// acc first initialize as 0 & sum up all value in the array
    // basic one
    // let sum = 0;
    // for (let i = 0; i < this.length; i++) {
    //   sum += this.items[i];
    // }
    // return this.sum; // :-)
  }

  avg() { 
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() /this.length; // call sum() to get sum.
   
    // or classic
    // let sum = 0;
    // for (let i = 0; i < this.items.length; i++){
    // sum += this.items[i];
    // }
    // return sum / this.length;
    // }
  }
}

module.exports = SortedList;
