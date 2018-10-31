class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b)
    this.length++;
  }
  get(pos) {
    return this.items[pos - 1]
  }
  max() {
    if(this.items.length === 0 ){
      throw new Error( "Empty sorted list")
    }else
    return Math.max(...this.items)

  }
  min() {
    if(this.items.length === 0){
      throw new Error ( "Empty sorted list")
    }else
    return Math.min(...this.items)
  }
  average() {
    if(this.items.length === 0){
      throw new Error ("EMpty sorted list")
    }else
    return this.sum()/this.length
  }
  sum() {
    return this.items.lenght === 0 ? 0 : this.items.reduce((b,c) => b + c) 
  }
};

module.exports = SortedList;