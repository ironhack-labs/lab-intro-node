class SortedList {
  // let items =[];
  constructor(items = []) {
    this.items = items;
    this.length= this.items.length;

  }
  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    this.items=this.items.sort((a,b)=> a-b);
    if (this.length > 0){
     return this.items[this.items.length-1];
      // return Math.max(...this.items);
    };
    throw new Error("EmptySortedList")
  }
  min() {
    this.items=this.items.sort((a,b)=> a-b);
    if (this.length > 0){
     
       return Math.min(...this.items);
    };
    throw new Error("EmptySortedList")
  }
  sum() {
    return this.items.reduce((sum, e)=>sum+e,0);
  

  }
  average() {
    if(this.length>0){
    return this.items.reduce((avg, e) => avg+e)/this.length;
  }
    throw new Error("EmptySortedList")
    
  }
};  

module.exports = SortedList;
