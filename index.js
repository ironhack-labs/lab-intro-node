class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length = this.items.length;
    
  }

  get(pos) {
    let index = pos;
    for (let i=0;i<this.items.length;i++){
      index = this.items[i]
      if (pos> this.items.length){
        throw new Error('OutOfBounds')
      }
    }
    return index;
  }

  max() {
    let max;
    if (this.items.length < 1){
      throw new Error('EmptySortedList');
    } else {
      max = Math.max(...this.items)
    }
    return max;
  }

  min() {
    let min;
    if (this.items.length < 1){
      throw new Error('EmptySortedList');
    } else {
      min = Math.min(...this.items)
    }
    return min;

  }

  sum() {
    
    if(this.items.length < 1){
      return 0;
    }else {
      return this.items.reduce((s, e) =>  s + e)
    }
 
  }

  avg() {
    if(this.items.length < 1){
      throw new Error('EmptySortedList');
    }else {
      return this.items.reduce((s, e) => s + e, 0) /this.items.length
    }
    
  }
}





module.exports = SortedList;
