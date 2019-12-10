class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length ++;
    this.items.sort((a,b)=>a-b);
  }

  get(pos) {
  if (pos < this.length){
    let item = this.items[pos]
       return item;
  }else{
  throw new Error("OutOfBounds");
  }
  }
  

  max() {
    if (this.length !== 0){
   return Math.max(...this.items);
  }else{
    throw new Error("EmptySortedList");
  }
}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
