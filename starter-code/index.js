class SortedList {
  constructor() {
    this.items =[],
    this.length = this.items.length;
  }
  add(x) {
    this.items.push(x);
    this.items.sort((a, b) => a-b);
    this.length ++;
  }
  get(pos) {
    return this.items[pos-1]; 
  }
  max() {
    if(this.items == ""){
      throw new Error("EmptySortedList");
    }
    if(this.items){
      return Math.max(...this.items);
    }
    
  }
  min() {
    if(this.items == ""){
      throw new Error("EmptySortedList");
    }
    if(this.items){
      return Math.min(...this.items);
    }    
  }
  average() {
    if(this.items == ""){
      throw new Error("EmptySortedList")
    }
    else {
      return this.items.reduce((a,b,)=> a + b,0)/this.length;
    } 
  }
  sum() {
    if(this.items == ""){
      return 0
    }
    else{
      return this.items.reduce((a,b,)=> a + b,0)
   }
  }
};

module.exports = SortedList;
