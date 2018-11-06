class SortedList {
  constructor() {
    this.items=[];
    this.length=0;

  }
  add(item) {
this.items.push(item);
this.length=this.items.length;
this.items.sort((a,b) => a-b);

  }
  get(pos) {
    //this.length=this.items.length;
    return this.items[pos-1];
  }
  max() {
    if (this.length>0){
      return Math.max(...this.items);
    }
    else throw new Error("EmptySortedList");
  }
  min() {
    if (this.length>0){

    return Math.min(...this.items);
  }
  else throw new Error("EmptySortedList");
}
  average() {
    if(this.length>0){
    let total = this.items.reduce((a,b) =>a+b);
    return total/this.length;
  }
  else throw new Error("EmptySortedList");
  }
  sum() {
    if(this.length>0){
      let total = this.items.reduce((a,b) =>a+b);
      return total;
    }
    return 0;
  }
};

module.exports = SortedList;
