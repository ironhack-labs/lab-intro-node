class SortedList {
  constructor() {
    this.items = []
    this.length = 0;
  };

  add(x) {
    this.items.push(x);
    this.items.sort((a, b) => a - b)
    this.length++;
  };

  get(pos) {
    return this.items[pos - 1];
  };

  max() {
    if (this.length === 0) {
      return this.items
    }
    let max = Math.max(...this.items)
    return max
  };

  min() {
    if (this.length === 0) {
      return this.items
    }
    let min = Math.min(...this.items)
    return min;
  };

  average() {
    if (this.length === 0) {
      return this.items
    }
    return this.sum() / this.length;
  };

  sum() {
    if (this.length === 0) {
      return this.items
    }
    let avrg = this.items.reduce((accelerator, number) => {
      var sum = accelerator + number;
      return sum
    }, 0)
    return avrg
  };
};

module.exports = SortedList;