class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;

    // I didnt want to sort all the array everytime i execute this method so I tried the code
    // underneath but its not working. Dont know why.

    // if (!this.length) {
    //   this.items.push(item);
    // } else {
    //   for (let i = 0; i < this.length; i++) {
    //     if (item < this.items[i]) {
    //       this.items.splice(i, 0, item);
    //     } else {
    //       this.items.push(item);
    //     }
    //   }
    // }
    // this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    if (!this.length) return 0;
    return this.items.reduce((val, cur) => val + cur);
  }

  avg() {
    if (!this.length) {
      throw new Error("EmptySortedList");
    } else {
      let sum = this.sum();
      return sum / this.length;
    }
  }
}

module.exports = SortedList;

// let list = new SortedList();

// list.add(30);
// list.add(20);
// list.add(10);

// console.log(list.items)
