class SortedList {

  get length () {
    return this.items.length;
  }
  constructor() {
    this.items = []; 
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){
      if (a > b) {
        return 1;
      } else if (a < b){
        return -1;
      } 
      return 0;
    });
  }

  get(pos) {
    return this.items[pos];
  }
  max() {
    if (this.length === 0){
      throw new Error ("EmptySortedList");
    } 
    return this.items[this.length-1];
  }
  min() {
    if (this.length === 0){
      throw new Error ("EmptySortedList");
    } 
    return this.items[0];
  }

  average() {
    if (this.length === 0){
      throw new Error ("EmptySortedList");
    } 
    return this.sum()/this.length;
  }
  sum() {
    if (this.length === 0){
      return 0;
    } 
    return this.items.reduce(function (acc, val) {
      return acc + val;
    }, 0);
  }
};

module.exports = SortedList;
