class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a -b)
    this.length = this.items.length
  }

  get(pos) {
     if (this.items[pos]) {
       return this.items[pos];
     } else {
       throw new Error("OutOfBounds");
     }
  }

  max() {
     if (this.items.length > 1) {
       return Math.max(...this.items);
     } else {
       throw new Error("EmptySortedList");
     }
  }

  min() {
     if(this.items.length > 1){
      return Math.min(...this.items);
    }else{
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if(this.items.length === 0){
      return 0;
    }else{
    let sum = this.items.reduce((acc, curr)=> acc += curr)
    return sum;
  }

  avg() {
     if(this.items.length === 0){
      throw new error('EmptySortedList');
    }else{
      let total = this.items.reduce((acc, curr)=> acc += curr )
      return total / this.items.length
    }
  }
}

module.exports = SortedList;
