
class SortedList {
  constructor () {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.length++;
  }

  get(pos) {
    let element = this.items.indexOf(pos);
    return this.items[element];
  }

  max() {}
  min() {}
  average() {}
  sum() {}
};

module.exports = SortedList;
