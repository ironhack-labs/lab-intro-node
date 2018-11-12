class SortedList {

  constructor() {
    this.items = [],
    this.length = 0
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => {return a - b});
    this.length = this.items.length;
  }
  get(pos) {
    if (this.items[pos - 1] !== undefined) {
      return this.items[pos - 1]
    } else {
      throw new Error("OutOfBounds");
    }
  }
  max() {
    if (this.items.length !== 0) {
      return Math.max(...this.items)
    } else {
      throw new Error("EmptySortedList")
    }
  }
  min() {
    if (this.items.length !== 0) {
      return Math.min(...this.items)
    } else {
      throw new Error("EmptySortedList")
    }
  }
  average() {

    if (this.items.length !== 0) {
      let sum = this.items.reduce((acum, val) =>  {
        return acum += val;
      })
      return sum/this.items.length
    } else {
      throw new Error("EmptySortedList")
    }

  }
  sum() {
    if (this.items.length === 0 ) {
      return 0;
    } else {
      return this.items.reduce((acum, val) =>  {
        return acum += val;
      })
    }
  }
};

module.exports = SortedList;
