class SortedList {
  constructor() {
    this.item = [];
    this.length = this.item.length;
  }
  add(item) {
    this.item.push(item);
    this.length = this.item.length;
  }
  get(item) {
    this.item.sort(function(a, b){return a-b});
    return this.item[item-1];
  }
  max() {
    if(this.item.length == 0){
      throw new Error("EmptySortedList");
    } else return Math.max.apply(Math,this.item);
  }
  min() {
    if(this.item.length == 0){
      throw new Error("EmptySortedList");
    } else return Math.min.apply(Math,this.item);
  }
  average() {
    if(this.item.length == 0){
      throw new Error("EmptySortedList");
    } else {
      var sum = this.item.reduce((a,b)=> a+b, 0);
      return (sum/this.item.length);
    }
  }
  sum() {
    return this.item.reduce((a,b)=> a+b, 0);
  }
};

module.exports = SortedList;
