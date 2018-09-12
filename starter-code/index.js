class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b)=>a-b)
  }
  get(pos) {
    return this.items[pos-1]
  }

  max() {
    if(this.length>1){
      return this.items[this.length-1]
    }
    else{
      throw new Error("EmptySortedList")
    }
  }
  min() {
    if(this.length>1){
      return this.items[0]
    }
    else{
      throw new Error("EmptySortedList")
    }
  }
  average() {
    if(this.length<1){
      throw new Error("EmptySortedList")
    }
    else{
      return (this.items.reduce((a,b)=> a+b)/this.length)
    }
  }
  sum() {
    if(this.length === 0) return 0
    else{
      return this.items.reduce((a,b)=> a+b)
    }
  }
};

module.exports = SortedList;
