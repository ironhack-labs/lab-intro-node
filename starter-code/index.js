class SortedList {
  constructor(length, item) {
    this.length = 0;
    this.item = [];
  }

  add(item) {
    this.item.push(item);
    this.length += 1;
    this.item.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {

    var position = this.item[pos - 1];

    return position;
  }

  max() {

    if (this.length === 0) {
      throw new Error("EmptySortedList");

    } else {
      return this.item[this.length - 1];
    }
  }

  min() {

    if (this.length === 0) {
      throw new Error("EmptySortedList");

    } else {
      return this.item[0];
    }
  }

  sum() {
    var sum = 0;
    this.item.forEach(function (oneItem) {
      sum += oneItem;
    });
    return sum;
  }
  average() {
    var avg = 0;
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      avg = this.sum() / this.length;
    }
    return avg


  };



}

module.exports = SortedList;