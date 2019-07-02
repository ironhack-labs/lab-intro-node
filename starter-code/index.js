class SortedList {
  constructor() {
    this.items = [];
      this.length = this.items.length;
    }

  add(item) {
    this.items.push(item);
    this.items.sort();
    // this.items.sort(function(a,b){
    //   return a-b ;
    // });
    // return this.items// doesn't work on num sort different
    this.length = this.items.length;
  }
  
  get(pos) {
    // if(this.items[pos] === undefined){
    //   throw new Error("OutOfBounds exception");
    // }//maybe messsing things up
    if(this.length === 0){
      throw new Error("OutOfBounds");
    }
    else{
      return this.items[pos-1];
    }
  }
  
  max() {
    if(this.length == 0){
      throw new Error("EmptySortedList");
    }
    else{
      return Math.max(...this.items);
    }
  }
  min() {
    if(this.length == 0){
      throw new Error("EmptySortedList");
    }
    else{
      return Math.min(...this.items);
    }
  }
    average() {
      if(this.length === 0){
        throw new Error("EmptySortedList");
      }
      else{
        return this.items.reduce((a,b)=>{ //fat arrow notation to keep this
          return (a+b)
        },0)/this.items.length;
      }
    }
    sum() {
      if(this.length === 0){
        return 0;
      }
      else{
        return this.items.reduce((a,b)=>{
          return a + b;
        },0);
      }
    }
};

module.exports = SortedList;
