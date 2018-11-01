class SortedList {
  constructor() {
    this.items = [],
    this.length = 0
  }
  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    let item = this.items[pos-1];
    return item;
  }
  max() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.get(this.length);
    }
  }
  min() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.get(1);
    }
  }
  average() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((a,b) => a + b) / this.length;
    }
  }
  sum() {
    if(this.length === 0) {
      return 0;
    } else {
      return this.items.reduce((a, b) => a + b);
    }
  }
};

module.exports = SortedList;
let sl = new SortedList;
var foo = 10;
      for(i=1; i<10; i++) {
        sl.add(foo*i);
        sl.get(i);
        console.log(sl.get(i));
      }