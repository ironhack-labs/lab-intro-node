class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length = this.items.length; 
  }

  get(pos) {
    if (pos < this.length) {
      return this.items[pos];
    } else {
      throw new Error ("OutOfBounds");
    }
  }

  max() {
    if (this.length > 0) {
      return Math.max(...this.items);
    } else {
      throw new Error ("EmptySortedList");
    }
  }
  
  min() {
    if (this.length > 0) {
      return Math.min(...this.items);
    } else {
      throw new Error ("EmptySortedList");
    }
  }

  sum() {
    // let sum = 0;


    // for (let i = 0; i < this.length; i++) {
    //   sum += this.items[i];
    // }

    // return sum;

    // with reduce array method
    if (this.length > 0) {
      return this.items.reduce((a,b) => a+b)
    } else {
      return 0;
    }


  }

  avg() {
    if (this.length > 0) {
      return this.sum() / this.length;
      //return this.items.reduce((a, b) => a + b)/this.length;
    } else {
      throw new Error("EmptySortedList");
    }


  }
}

module.exports = SortedList;
