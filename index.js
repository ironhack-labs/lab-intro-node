class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length; //add single value to sorted list
    this.items.sort(function (a, b) {
      //sort
      return a - b;
    });
  }

  get(pos) {
    //get position data
    if (pos > this.length) {
      //I also tried using OR lesset than but " should return the element in that position" didn't work
      throw new Error("EmptySortedList");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      //spread operator
      return Math.max(...this.items);
    }
  }

  min() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      //spread operator
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.length == 0) {
      return 0;
    } else {
      let totalSum = 0;
      for (const value of this.items) {
        totalSum += value;
      }
      return totalSum;
    }
  }

  avg() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;
