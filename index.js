class SortedList {
  //Iteration 1: constructor()
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (this.length === 0 || item > this.items[this.length - 1]) {
      this.items.push(item);
    } else if (item < this.items[0]) {
      this.items.unshift(item);
    } else {
      for (let i = 0; i < this.items.length; i++) {
        if (item > this.item[i] && item < this.item[i + 1]) {
          this.items.splice(i + 1, 0, item);
        }
      }
    }
    this.length = this.items.length;
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
