class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    return this.items.sort((a, b) => a - b);
  }

  //with arguments
  // add(item) {
  //   return [...arguments].sort((a, b) => a - b);
  // }

  get(pos) {
    // try {
    if (this.items[pos] === undefined) {
      // return !this.items[pos];
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
    // } catch (err) {
    //   return `(${err.name}): ${err.message}`;
    //   // return ` ${err}`;
    // }
  }

  max() {
    // try {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
    // } catch (err) {
    //   return ` ${err}`;
    //   // return `Error: ${err.message}`;//or
    // }
  }

  min() {
    // try {
    if (this.items.length === 0) {
      throw Error('EmptySortedList');
    }
    return Math.min(...this.items);
    // } catch (err) {
    //   return ` ${err}`;
    //   // return `Error: ${err.message}`; //or
    // }
  }

  sum() {
    if (this.items.length == 0) return 0;
    return this.items.reduce((acc, val) => acc + val);
  }

  avg() {
    // try {
    if (this.items.length === 0) {
      throw Error('EmptySortedList');
    }
    return this.sum() / this.length;
    // } catch (err) {
    //   return ` ${err}`;
    // }
  }
}

module.exports = SortedList;
// const test = new SortedList();
// // console.log(test.add(5));
// // console.log(test.add(2));
// // console.log(test.add(7));
// console.log(test.items);
// // console.log(test.add(1, 2, 7, 4, 6, 24, 5));
// console.log(test.get(1));
// console.log(test.max());
// console.log(test.min());
// console.log(test.sum());
// console.log(test.avg());
