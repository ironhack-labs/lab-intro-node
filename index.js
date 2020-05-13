class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a,b) => {return a - b})
    this.length = this.items.length;
  }

  get(pos) {
    if (pos <= this.length - 1){
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if(this.length != 0){
      return Math.max(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
    
  }

  min() {
    if (this.length !== 0) {
      return Math.min(...this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    if (this.length === 0){
      return 0
    } else {
       return this.items.reduce((acc,val) => acc + val); 
    }
  }

  avg() {
    if(this.length != 0){
      return this.sum(this.items) / this.length;
    } else {
      throw new Error('EmptySortedList')
    }
  }
}

module.exports = SortedList;
