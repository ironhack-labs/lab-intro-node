class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;

  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=> a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos <= this.length){
       return this.items.slice(pos, pos +1)
    } else {
   throw new Error('OutOfBounds');
  }
}

  max() {
if (this.length === 0) {
  throw new Error('EmptySortedList')
}else {
  return this.items[this.length-1];
}

  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    }else {
      return this.items[0];
    }
  }

  sum() {
    if (this.length === 0) {
      return 0
    }else {
      return this.items.reduce(function(accumulator, currentValue) {return accumulator + currentValue}
      )
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    }else {
      return this.sum()/this.length;
    }

  }
}

module.exports = SortedList;
