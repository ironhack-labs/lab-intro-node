class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length; //this.getLength();
    }
    add(item) {
      this.items.push(item);
      this.length = this.items.length;
    }
    get(pos) {
      return this.items[pos];
      //return this.items.sort(pos);
    }
    max() {
      return this.items[1];
    }
    min() {}
    average() {}
    sum() {}
    //getLength(){
      //return this.items.length;
    //}
  }
  
  module.exports = SortedList;