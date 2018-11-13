class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b){
      return a-b
    })
    this.length++;
  }
  get(pos) {
    return this.items[pos-1];
  }

  max() {
    if(this.items.length === 0){
     throw new Error("EmptySortedList");
    }else{
      return this.items[this.items.length -1];
    }
   }
   min() {
     if (this.length === 0) {
       throw new Error("EmptySortedList")
     }
     return this.items[0];
    }
    average() {
      if (this.items.length > 0) {
        let counter = 0;
        this.items.map(elem => counter += elem);
        return counter / this.items.length;
      }
      else throw new Error("EmptySortedList");
    }
    sum() {
      if (!this.items.length) return 0;
      
      return this.items.reduce((acc, elem) => acc += elem);
    }
};
module.exports = SortedList;

