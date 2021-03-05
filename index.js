class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let isInserted = false;
    for (let i = 0; i < this.length; i++) {
      if (item <= this.items[i]) {
        this.items.splice(i, 1, item, this.items[i]);
        isInserted = true;
        break;
      }
    }
    if (isInserted === false) {
      this.items.push(item);
    }
    this.length++;
  }

  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutofBounds");
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }

  sum() {
    return this.length === 0
      ? 0
      : this.items.reduce((acc, item) => {
          return (acc += item);
        });
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;

// const testList = new SortedList();

// testList.add(10);

// testList.add(30);

// testList.add(25);

// console.log(testList);
