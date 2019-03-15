class SortedList {
  constructor() {
    this.items = [];
    //this.length = this.items.length; // <-- will set a static length (0)
  }
  get length() { // this will add an option to do test.length which will equal this.items.length
    return this.items.length;
  }
  add(x) {
    this.items.push(x);
    this.sort();
  }
  get(pos) {
    return this.items[pos];
  }
  sort() {
    this.items.sort((a, b) => { return a - b });
  }
  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    };
  };
  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  average() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    } 
  }  
  sum() {
    if (this.length == 0) {
      return 0;
    } else {
      return this.items.reduce((incr, total) => {
        return total + incr;
      });
    }
  };
};

// var test = new SortedList; 
// test.add(20);
// test.add(10);
// test.add(21);
// test.add(11); 
// console.log(test.max());
// console.log(test.sum());

module.exports = SortedList; 