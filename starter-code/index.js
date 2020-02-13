class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b){ return a - b; });
    this.length = this.items.length;
  }

  get(pos) {
    if((this.length) >= this.items[pos])
      return this.items[pos];
    else 
      throw new Error("OutOfBounds");
  }

  max() {
    if(!this.length == 0){
      const max = this.items.sort(function(a, b){return b-a});
      return max[0];
    }
    else
      throw new Error("EmptySortedList");
  }

  min() {
    if(!this.length == 0){
      const max = this.items.sort(function(a, b){return a-b});
      return max[0];
    }
    else
      throw new Error("EmptySortedList");
  }

  sum() {
    if(!this.length == 0){
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return this.items.reduce(reducer);
    }
    else
      return 0;
  }

  avg() {
    if(!this.length == 0){
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      const reduce =  this.items.reduce(reducer);
      return reduce / this.items.length;
    }
    else
      throw new Error("EmptySortedList");
  }
}

module.exports = SortedList;
