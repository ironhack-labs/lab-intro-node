class SortedList {
  constructor() {
    this.items =[];
    this.length = 0;
  }

  add(item) {
    this.items.push (item);
    this.items.sort((a,b) =>  a-b);
    this.length ++;
  }

  get(pos) {
    if (pos > this.items.length|| pos < 0) {
    throw new Error("OutOfBounds"); 
  } else  {
    return this.items[pos]; 
  }
  }

  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }else{
     return Math.max(...this.items);
    }
  }

  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
  }else{
    return Math.min(...this.items);
  }
  }

  sum() {
    if (this.length === 0){
      return 0
    }else{
      return this.items.reduce(((tot, cur)  => tot += cur),0);
    }
  }

  avg() {}
}

module.exports = SortedList;
