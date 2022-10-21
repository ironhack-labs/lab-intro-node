class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    let itemsSorted = this.items.sort((a,b)=> a - b)
    this.items = itemsSorted
    this.length = itemsSorted.length
  }

  get(pos) {
    if(pos === this.length - 1 || pos < this.length && pos >= 0 ){ 
      return this.items[pos] 
    } else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.length === 0 ) {
      throw new Error('EmptySortedList');
    }else{ 
      return Math.max(...this.items)
    }
  }

  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }else{ 
      return Math.min(...this.items)
    }
  }

  sum() {
    return this.items.reduce((acc,cur)=> acc + cur,0)
  }

  avg() {
    if(this.length === 0 ) {
      throw new Error('EmptySortedList');
    }else{ 
      return this.sum()/this.length
    }
  }
}
module.exports = SortedList;
