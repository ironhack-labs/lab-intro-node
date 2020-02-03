class SortedList {
  constructor(items,length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
  
    this.items.push(item);
    this.items.sort(function(a,b){
    
        return a-b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]!= undefined){
      return this.items[pos]
    }
    else{
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.items.length === 0){
      
      throw new Error("EmptySortedList");
    }
    else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length === 0){
      throw new Error ("EmptySortedList")
    }
    else{
      return Math.min(...this.items)
    }
  }

  sum() {
    return this.items.reduce((ac,item) => { return ac + item},0 )
  }

  avg() {
    if (this.items.length === 0){
      throw new Error ("EmptySortedList")
    }
    else{
    let sum = this.items.reduce((ac,item) => { return ac + item},0 )
    return sum / this.items.length
    }
  }
}

module.exports = SortedList;
