class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a-b});
    this.length++;
    console.log(this.items);
  }

  get(pos) {
    if (pos <= this.length-1) {
      return this.items[pos];
    }
    else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length != 0) {
      return this.items[this.length-1];
    }
    else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length != 0) {
      return this.items[0];
    }
    else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    let arrSum = 0;
    if (this.length != 0) {
      for (let item of this.items) {
        arrSum += Number(item);
      }
      return arrSum;
    }
    else {
      return 0;
    }
  }

  avg() {
    if (this.length != 0) {
      return this.sum()/this.length;
    }
    else {
      throw new Error("EmptySortedList");
    }
  }
}

module.exports = SortedList;

let mySortedList = new SortedList();
mySortedList.add(2);
console.log();
