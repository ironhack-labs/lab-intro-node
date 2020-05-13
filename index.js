class SortedList {
  constructor(items, length) {
    this.items = [1,3,5,7];
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


  get(pos) {
    return this.items[pos];
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}


let sortedList = new SortedList();


module.exports = SortedList;
