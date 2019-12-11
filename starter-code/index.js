class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
   if(!this.items[pos]){
    throw new Error("OutOfBounds");
   }
   return this.items[pos];
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}



module.exports = SortedList;
