class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => {
      // console.log(a,b,'asdf')
      return a - b
    });
    this.length = this.items.length;
  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    if(this.length == 0){
      throw new Error('EmptySortedList');
    }
    return this.items[this.length - 1];
  }
  min() {
    if(this.length == 0){
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }
  average() {
    if(this.length == 0){
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length;
  }
  sum() {
    let sum = 0;
    if(this.length == 0){
      return sum;
    }
    this.items.forEach(element => {
      sum += element;
    });
    return sum;
  }

  
};

module.exports = SortedList;
