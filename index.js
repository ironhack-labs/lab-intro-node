class SortedList {
  constructor() {
    this.items=[];
    this.length=0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a,b){
      return a-b;
    });
    this.length++
  }

  get(pos) {
    if(pos>=this.items.length){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if(this.length===0){
      throw new Error('EmptySortedList');
    }
    return this.items[this.length-1]
  }

  min() {
    if(this.length===0){
      throw new Error('EmptySortedList');
    }
    return this.items[0]
  }

  sum() {
    if(this.length===0){
      return 0;
    }
    let sum= this.items.reduce(function (acc,cv){
      return acc+cv
    });
    return sum;
  }

  avg() {
    if(this.length===0){
      throw new Error('EmptySortedList');
    }
    let avg=this.sum()/this.length
    return avg;
  }
  
}

module.exports = SortedList;
