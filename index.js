class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
   this.items.push(item);
   this.items.sort((a,b) => a - b);
   this.length = this.items.length
   
  }

  get(pos) {
    if( pos > this.items.length){
      throw new Error('OutOfBounds')
    }
    return this.items.splice(pos,1);
  }

  max() {
  
  if(this.length === 0){
    throw new Error('EmptySortedList')
  } else {
     return Math.max(...this.items) 
    }
  }

  min() {
    if(this.length === 0){
    throw new Error('EmptySortedList')
  } else {
     return Math.min(...this.items) 
    }}
//
  sum() {
    if(this.length === 0){
      return 0
    }else {
      return this.items.reduce((a,b) => a+b)
    }
  }

  avg() {
    if(this.length === 0){
      throw new Error('EmptySortedList')
  }else {
    return this.sum() / this.items.length;
  }
}

}

module.exports = SortedList;
