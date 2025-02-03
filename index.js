class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (this.items[pos] == null) {
      throw new Error("OutOfBounds");
    }

    return this.items.indexOf(pos);
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.length == 0) {
      throw new Error("Empty SortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    let itemsSum = 0;

    this.items.forEach((num) => {
      itemsSum += num;
    });
    return itemsSum;
  }

  avg() {
    if (this.length == 0) {
      throw new Error("Empty SortedList");
    }

    return this.sum() / this.length;

    /* let itemsSum = 0;

    this.items.forEach((num) => {
      itemsSum += num;
    });

    let itemsAvg = itemsSum / this.items.length;

    return itemsAvg; */
  }
}

module.exports = SortedList;
