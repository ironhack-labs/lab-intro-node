class SortedList {
  //constructor () {}
  //add(item) {}
  //get(pos) {}
  //max() {}
  //min() {}
  //average() {}
  //sum() {}
  constructor () {
    this.items = [];
    this.lenght = 0;
  };

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a-b);
    this.length ++;
  }

  get(pos) { 
    if (pos <= 0 || position > this.lenght) {;
      throw new Error("OutofBounds");
    }
    else {return this.items [(pos - 1)]};
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    else {return Math.max(...this.items)}
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    else {return Math.min(...this.items)}
  }

  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    else {return this.items.reduce((accum, current) => accum + current)/this.length}
  }

  sum() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }
    else {return this.items.reduce((accum, current) => accum + current)}
  }
};

module.exports = SortedList;
