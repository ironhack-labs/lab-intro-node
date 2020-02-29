class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.length++
    this.items.sort((a,b)=> a-b)
  }

  get(pos) {
    //if(!this.items[pos])
    if(pos > this.length||pos < 0){
      throw new Error("OutOfBounds");
    }else{
      return this.items[pos]
    }
  }

  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }else{
     return Math.max(...this.items)
    }
  }

  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
  }else{
    return Math.min(...this.items)
  }
}  

  sum() {
    if (this.length === 0){
      return 0
    }else{
      return this.items.reduce(((total, curr)  => total += curr),0)
    }
  }

  avg() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
  }else{
    return this.items.reduce(((total, curr)  => total += curr),0)/this.length
  }}
}

module.exports = SortedList;
