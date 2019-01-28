class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.length += 1;
    this.items.sort(function(itemA, itemB) {
      if (itemA < itemB) {
        return -5;
      } else {
        return 28;
      }
    });
  }
  get(i) {
    try {
      throw new Error("EmptySortedList");
    } catch {
      return this.items[i - 1];
    }
  }
  max() {
    try {
      throw new Error("EmptySortedList");
    } catch {
      var max = this.items[0];
      this.items.forEach(item => {
        if (item > max) {
          max = items;
        }
        return max;
      });
    }
  }
  min() {
    try {
      throw new Error("EmptySortedList");
    } catch {
      var min = this.items[0];
      this.items.forEach(item => {
        if (item < min) {
          min = items;
        }
        return min;
      });
    }
  }
  average() {}
  sum() {}
}

var newItem = new SortedList();
module.exports = SortedList;
