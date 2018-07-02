class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add (item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  };
  get (pos) {
    return this.items[pos - 1];
  };

  max (){
    return Math.max.apply(null, this.items);
  };
  min(){
    return Math.min.apply(null, this.items);
  };
  
  average() {
    return this.items.reduce((acc, e) => acc + e, 0) / this.length;
  };
  sum () {
    return this.items.reduce((acc, e) => acc + e, 0);
  };
}






module.exports = SortedList;
