class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(x) {
    this.items.push(x);
    this.items.sort((a,b)=> (a-b));
    this.length = this.items.length;
  }
  get(i) {
    //this.items.sort();
   return this.items[i];
  
  }
  max() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    else{
      return this.items[this.items.length-1];
    }
  }
  min() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    else {
      return this.items[0];
    }
  }
  average() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList");
    }
    else{
      return (this.items.reduce((a, b) => a + b, 0))/this.items.length;
    }
  }
  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }
};

module.exports = SortedList;