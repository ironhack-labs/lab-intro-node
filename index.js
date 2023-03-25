class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
  }

  get(pos) {
    if(pos < this.items.length - 1){
      const item = this.item[pos];
      return item;
     }else if(pos > this.item.length || pos === undefined || pos < 0){
      throw new Error('OutOfBounds');
     }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
