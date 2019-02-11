class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.items.sort();
    this.length++;
  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    if(this.length > 0){
      return this.items[this.items.length-1];
    }
    else {
      throw new Error('EmptySortedList');
    }
  }
  min() {
    if(this.items.length > 0){
      return this.items[0];
    }
    else {
      throw new Error('EmptySortedList');
    }
  }
  average() {
    if(this.length > 0){
      var average = this.sum()/this.length;
      return average;
    }
    else {
      throw new Error('EmptySortedList');
    }
  }
  sum() {
    var itemSum = 0;
    if(this.items.length == 0){
      return 0;
    }
    else {
      for(var i = 0; i < this.items.length; i++){
        itemSum += this.items[i];
      }
      return itemSum;
    }
  }
};
module.exports = SortedList;