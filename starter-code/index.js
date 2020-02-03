class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length){
    throw new Error(" OutOfBounds ") 
  } else{
    return this.items[pos];
    }
  }

  max() {
    if(this.length)return this.items[this.length-1];
    throw new Error("EmptySortedList")
  }

  min() {
    if(this.length) return this.items[0];
    throw new Error("EmptySortedList")
  }

  sum() {
   return this.items.reduce((a,b) => a +b, 0)
  }

  avg() {
    if(this.length === 0){
    throw new Error("EmptySortedList");
    }else{
      return this.items.reduce((a,b)=> a+b,0)/this.length
    }
  }
}

module.exports = SortedList;
