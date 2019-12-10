class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < this.length){
      return this.items[pos];
    }
    throw new Error("OutOfBounds");
  }

  max() {
    if(this.length>0){
      return Math.max(... this.items);
    }
    throw new Error("EmptySortedList");
  }

  min() {
    if(this.length>0){
      return Math.min(... this.items);
    }
    throw new Error("EmptySortedList");
  }
  

  sum() {}

  avg() {}
}

module.exports = SortedList;
