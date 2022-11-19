class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort( (a,b) => a - b )
  }

  get(pos) {
    if(this.items[pos]){
      return this.items[pos]
    }else{
      throw new Error('OutOfBounds');
    } 
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a,b)=>Math.max(a,b))
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a,b)=>Math.min(a,b))
    }
  }

  sum() {
    if(this.items.length === 0){
      return 0;
    } else {
      return this.items.reduce((a,b)=> a + b )
    }
  }

  avg() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.items.length 
    }
  }
}

module.exports = SortedList;
