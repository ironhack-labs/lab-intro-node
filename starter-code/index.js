class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.item = item;
    this.items.push(item);
    this.length++;
  }
  get(pos) {
    this.pos = this.items.indexOf(pos);
    return this.items[this.length -1];
  
//    
//    add(item) {
//      this.item = item;
//      if (this.items === []) {
//        this.items.push(item);
//      }
//      else {
//        if (this.items[this.length - 1] > this.item) {
//          this.items.sort((a, b) => a - b)
//        }
//        else {
//          this.items.push(item);
//        }
//      }
//      this.length++;
//    }
//    get(pos) {
//      pos = this.items.indexOf(this.item);
//      this.pos = pos;
//      
//      
//      return this.items[this.pos];    
//  //let pos = this.items.indexOf(item);
  //this.pos = pos; 

  //this.pos = this.length - 1;
  //return this.items[this.pos]

  //this.pos = this.items.indexOf(item)
  }
  max() {}
  min() {}
  average() {}
  sum() {}
};

module.exports = SortedList;
