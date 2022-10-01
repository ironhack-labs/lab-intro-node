class SortedList {
  constructor(items, length) {
    items = [];
    length = items.length
    this.items = items;
    this.length = items.length;
  }

  add(item) {
     item = [];
     this.items.push();
     this.items.sort((a, b) =>{return(a - b)})

  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
