class SortedList {
  constructor() {
    this.items=[];
    this.length=0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>a-b)
    this.length++;
  }
  get(pos) {
      return this.items[pos-1];
  }
  max() {
    if(this.length>0){
     return this.get(this.length)
    }else{
      throw new Error("EmptySortedList")
    }
  }
  min() {
    if(this.length>0){
      return this.get(1)
     }else{
       throw new Error("EmptySortedList")
     }
  }
  average() {
    if(this.length>0){
      return this.sum()/this.length
     }else{
       throw new Error("EmptySortedList")
     }
    
  }
  sum() {
    if(this.length>0){
      return this.items.reduce((t,e)=>t+=e)
    }else{
      return 0
    }
  }
};

module.exports = SortedList;
