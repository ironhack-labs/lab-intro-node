class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>{
      return a-b;
    });
    this.length ++;
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((a, b) =>  Math.max(a, b));
  }
  min() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((a, b) => Math.min(a, b));
  }
  average() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    return this.items.reduce((a,b) => (a + b)) / this.items.length ;
  }
  sum() {
    return this.items.reduce((a,b) => (a + b), 0); 
  }
};

module.exports = SortedList;
