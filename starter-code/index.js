class SortedList {
  constructor() {
    this.length = 0;
    this.sortedList = [];
  }

  add(item) {
    this.sortedList.push(item);
    this.length = this.sortedList.length;
    this.sortedList.sort((a, b) => a -b);
  }

  get(pos) {
    if (pos > this.length) {
      return new Error('OutOfBounds');
    }
    return this.sortedList[pos - 1];
  }

  max() {
    if (this.sortedList.length > 0) {
      return this.sortedList[this.sortedList.length - 1];
    } else {
      throw new Error('EmptySortedList');

    }
  }

  min() {
    if (this.sortedList.length > 0) {
      return this.sortedList[0];
    } else {
      throw new Error('EmptySortedList');

    }
  }

  average() {
    if (this.sortedList.length > 0) {
      return this.sortedList.reduce((acc, val) => acc + val) / this.sortedList.length;
    } else {
      throw new Error('EmptySortedList');
    }
  }
  
  sum() {
    if (this.sortedList.length > 0) {
      return this.sortedList.reduce((acc, val) => {
        return acc + val;
      });
    }
    return 0;
  }
};

module.exports = SortedList;


let sl = new SortedList ();
sl.add(10);
sl.add(5);
sl.add(15);
console.log(sl);
console.log(sl.min())
console.log(sl.sortedList[0])