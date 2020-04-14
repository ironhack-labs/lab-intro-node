class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    let sortedList = this.items.sort(function (a, b) {
      return a - b;
    });
    this.length += sortedList.length;
    return sortedList;
  }
  /*
    add(item) {
    this.items.sort(function (a, b) {
      return a - b;
    }
    if (item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
  } return this.items;
  }
  */

  get(pos) {
    if (pos > this.items.length) {
      throw new Error("OutOfBounds");
    } else return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let SortedList = this.items.sort(function (a, b) {
        return a - b;
      });
      return Math.max(...SortedList);
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      let SortedList = this.items.sort(function (a, b) {
        return a - b;
      });
      return Math.min(...SortedList);
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce((total, amount) => total + amount);
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return (
        this.items.reduce((total, amount) => total + amount) / this.items.length
      );
    }
  }
}

module.exports = SortedList;
