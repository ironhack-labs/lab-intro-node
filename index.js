class SortedList {
  constructor(items = []) {
  this.item = items;
  this.length = item.length;

  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=> a-b);
    this.length = this.items.length

  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
