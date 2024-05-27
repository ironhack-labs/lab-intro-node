class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=> a-b)
    this.length = this.items.length
  }

  get(pos) {
    if(pos<0 || pos>= this.items.length){
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }

  max() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    if(this.items.length === 0){
      return 0
    }
    let sumAll = this.items.reduce((arr,curr)=>arr+curr, 0)
    return sumAll
  }

  avg() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    let sumAll = this.sum()
    return sumAll/this.items.length
    
  }
}

module.exports = SortedList;
