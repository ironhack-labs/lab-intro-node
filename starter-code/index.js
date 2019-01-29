class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }
  add(x) {
    this.items.push(x);
    this.items.sort((a,b) => a-b);
    this.length++;
  }
  get(pos) {
    return this.items[(pos - 1)];
  }
  max() {

    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    } else{
      return this.items[this.items.length-1];
    }

  }
  min() { 

    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    } else{
      return this.items[0];
    }
  }
  sum() { 
    if (this.length <= 0) {
      return 0;
    } else{
      return this.items.reduce((accum, number) =>{
        return accum + number;
      },0)
    }
  }

  average() {
    if (this.length <= 0) {
      throw new Error("EmptySortedList");
    } else{
      return this.sum()/this.length;
    }

   }
};

module.exports = SortedList;
