class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function compare(a, b) {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.items.length-1 || pos < 0){
      throw new Error(`_OutOfBounds_`);
    } 
    return this.items[pos];
  }

  max() {
    if (this.items[0] === undefined ){
      throw new Error(`EmptySortedList`);
    }
    return Math.max.apply(Math,this.items);
  }

  min() {
    if (this.items[0] === undefined ){
      throw new Error(`EmptySortedList`)
    }
    return Math.min.apply(Math,this.items);
  }

  sum() {
    if (this.items[0] === undefined ){
      return 0;
    }
    return this.items.reduce((accumulator, currentValue) => {return accumulator + currentValue;});
  }

  avg() {
    if (this.items[0] === undefined ){
      throw Error('EmptySortedList')
    }
    return (this.sum()/this.items.length);
  }
}

module.exports = SortedList;
