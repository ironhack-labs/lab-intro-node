class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }
  sortItems (arr) {
    return arr.sort((a,b) => a - b);
  }
  add(item) {
    // return this.items.push(item).sort((a, b) => a - b);
    this.items.push(item);
    this.sortItems(this.items);
    console.log(this.items);
    this.length = this.items.length;
    console.log(this.length);
  }


  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}


let sortedList = new SortedList();
sortedList.add(4);
sortedList.add(6);
sortedList.add(8);
sortedList.add(0);

module.exports = SortedList;
