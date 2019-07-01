class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a,b){
      if(a>b){
        return 1;
      }else if(a < b){
        return -1;
      }
      return 0;
    });
  }
  get(pos) {
      return this.items[pos-1];
  }
  max() {
    if(this.items.length ===0){
      throw new Error("EmptySortedList")
    }else{
      return this.items[this.length-1];
    }
  }
  min() {
    if(this.items.length ===0){
      throw new Error("EmptySortedList")
    }else{
      return this.items[0];
    }
  }
  average() {
    if(this.items.length ===0){
      throw new Error("EmptySortedList")
    }else{
      return this.sum()/this.length;
    }
  }
  sum() {
    if(this.items.length ===0){
      return 0;
    }else{
      let sum = this.items.reduce(function(a,b){
        return a+b;
      },0)
      return sum;
    }
  }
};

module.exports =  SortedList;
