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
    if (pos < this.items.length){
      console.log(this.items[pos])
    return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}


let sortedList = new SortedList();
sortedList.get(0);

module.exports = SortedList;
