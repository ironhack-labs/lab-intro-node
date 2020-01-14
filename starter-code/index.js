class SortedList {
  constructor() {
    this.items =[];
    this.length=0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>{
      return a-b;
    });
    this.length++;
  }

  get(pos) {
    if(pos>=this.length || pos<0)
      throw new Error("OutOfBounds");    
    return this.items[pos];
  }

  max() {
    if(this.length===0)
    throw new Error("EmptySortedList");
    return Math.max(...this.items);
  }

  min() {
    if(this.length===0)
    throw new Error("EmptySortedList");
    return Math.min(...this.items);

  }

  sum() {
    if(this.length===0)
    return 0;
    return this.items.reduce((acc,val)=>{
      return acc+val;
    },0)
    
  }

  avg() {
    if(this.length==0)
    throw new Error("EmptySortedList")
    return (this.sum()/this.length).toFixed(2);
  }
}

module.exports = SortedList;
