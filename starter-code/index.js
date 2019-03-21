class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  };

  //The add(x) method will add x to the items array.

add(item) {

this.items.push(item);
this.items.sort((a,b)=> a-b);
this.length = this.items.length;
  };
  
  get(pos) {}
  max() {}
  min() {}
  average() {}
  sum() {}
};

module.exports = SortedList;
