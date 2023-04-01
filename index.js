class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let i = 0
    while(i<this.items.length && this.items[i]<item){
      i++;
    }
    this.items.splice(i,0, item);
    this.length = this.items.length;
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
