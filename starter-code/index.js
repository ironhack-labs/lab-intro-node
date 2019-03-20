class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length++;
  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    if(this.items.length == 0){

    throw new Error("EmptySortedList")
    }
    return this.items[this.items.length -1]
  }
  min() {
    if(this.items.length == 0){

    throw new Error("EmptySortedList")
    }
    return this.items[0]
  }
  average() {
    if(this.items.length == 0){

    throw new Error("EmptySortedList")
    }
    var add = this.items.reduce((accumulator, curretnValue) =>{
      return accumulator + curretnValue;
    }, 0)
    var length = this.length;
    return add/length;
  }
  sum() {
    if(this.items.length == 0){

    return 0
    } 
    return this.items.reduce((accumulator, curretnValue) =>{
      return accumulator + curretnValue;
    }, 0)
  }
};

module.exports = SortedList;

var list = new SortedList();

