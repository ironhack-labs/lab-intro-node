class SortedList {
  constructor() {
    this.items = [] 
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    const arr = this.items.sort((a, b)=>{
      return a-b
    })
    this.length = this.items.length
  }

  get(pos) {
    if (pos <= this.length -1){
      return this.items[pos]
    }else{
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    if (this.length > 0){
   const sum = this.items.reduce(function (acc, val) {
      return acc+=val;
    }, 0);
    return sum;
  } else {
    return 0;
  }
  }

  avg() {
    if (this.length > 0){
     return this.sum()/this.length;
    } throw Error('EmptySortedList');
  }
}


module.exports = SortedList;
