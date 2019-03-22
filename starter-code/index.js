class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item); 
    this.items.sort((a,b)=> a-b);
    this.length++;
  }
  get(pos) {
    this.length = this.items.length;
    return this.items[pos -1];
  }
  max() {
    if (this.length === 0){ 
      throw new Error("EmptySortedList");
    }
    else{
      return Math.max(...this.items)
    }
  }
  min() {
    if (this.length === 0){ 
      throw new Error("EmptySortedList");
    }
    else{
      return Math.min(...this.items)
    }
  }
  sum() {
    if (this.items.length==0){
      return 0;
    }
    else{
      return this.items.reduce((a,b)=>a+b);
    }
  }
  average() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    } else{
      return this.sum()/this.length;
    }
  }
};

module.exports = SortedList;
