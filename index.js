class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.items.forEach((element) => {
      this.length++;
    })

    return this.items;
  }

  get(pos) {
    let myList = this.items;

    if (pos < 0 || pos >= myList.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }

  max() {
    let max = Math.max(...this.items);
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return max;
  }

  min() {
    let min = Math.min(...this.items);
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return min;
  }

  sum() {
    let sum = 0;
    this.items.forEach((element) => {
      sum += element;

    });

    if (this.length === 0) {
      return 0
    }
    return sum

  }

  avg() {
    let myList = this.items;
    let sum = 0;
    for(let i = 0; i  < myList.length; i++) {
      sum += myList[i];
    }
    if(myList.length === 0) {
      throw new Error("EmptySortedList");
    }
    return sum / myList.length;
  }
}

module.exports = SortedList;
