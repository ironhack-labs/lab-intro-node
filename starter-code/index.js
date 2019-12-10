class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.length++
    this.items.sort(function(a,b){
      return a - b;
    });
  }

  get(pos) {
    if(pos >= this.length){
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[this.length-1];
  }

  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    let sum = this.items.reduce(function(accumulator, item){
      return accumulator + item
    },0)
    return sum
  }

  avg() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.sum()/this.length;  
    
  }
}

module.exports = SortedList;
