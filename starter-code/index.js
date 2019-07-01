class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
      this.items.push(item);
      this.items.sort();
      this.length = this.items.length;
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if(this.length ===0 ){
      throw new Error("EmptySortedList")
    }
    let max = this.items[0];
    for(let a=1;a<this.length;a++){
      if(this.items[a] > max){
        max = this.items[a];
      }
    }
    return max;
  }
  min() {
    if(this.length ===0 ){
      throw new Error("EmptySortedList")
    }
    let min = this.items[0];
    for(let a=0;a<this.length;a++){
      if(this.items[a]<min){
        min = this.items[a];
      }
    }
    return min;
  }
  average() {
    if(this.length ===0 ){
      throw new Error("EmptySortedList")
    }
    let avg=0;
    for(let a = 0; a<this.length; a++){
      avg += this.items[a];
    }
    return avg/this.length;
  }
  sum() {
    let sum=0;
    for(let a = 0; a<this.length;a++){
      sum += this.items[a];
    }
    return sum;
  }
};



module.exports = SortedList;
