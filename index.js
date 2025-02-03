class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>a-b); // sort added array
    this.length = this.items.length;
  }

  get(pos) {
    if(this.length< pos){
      throw new Error("OutOfBounds");
    }
    else{
      return this.items[pos];
    }
    
  }

  max() {
    if(!this.items.length){
      throw new Error("EmptySortedList");
    }else{
      const max = this.items.reduce((acc,curr)=>Math.max(acc,curr),-Infinity);
      return max;
    }
  }

  min() {
    if(!this.items.length){
      throw new Error("EmptySortedList");
    }else{
      const min = this.items.reduce((acc,curr)=>Math.min(acc,curr), Infinity)
      return min;
    }
  }

  sum() {
    if(!this.items.length){
      return 0;
    }else{
      const sum = this.items.reduce((acc,curr)=>acc+curr,0);
      return sum
    }
  }

  avg() {
    if(!this.items.length){
      throw new Error("EmptySortedList");
    }else{
      return (this.sum()/this.items.length);
    }
  }
}

module.exports = SortedList;

