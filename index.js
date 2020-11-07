class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {return a-b;});
    this.length++;
  }

  get(pos) {
    if(pos >= 0 && pos <= this.length-1){
      return this.items[pos];
    }else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.length !== 0){
      return Math.max(...this.items);
    }else{
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if(this.length !== 0){
      return Math.min(...this.items);
    }else{
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    return this.items.reduce((a,b) => {
      return a+b;
    }, 0)
  }

  avg() {
    if(this.length !== 0){
      return this.sum()/this.length;
    }else{
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
