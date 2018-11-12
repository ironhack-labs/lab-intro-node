
class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length++;
  }
  get(pos) {
    return this.items[pos - 1 ];
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[this.length - 1];
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items[0];
    }
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.sum() / this.length;
    }
  }

  sum() {

    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce(function(ac,current){
        return ac + current;
      },0);
  }
}
};

// var soretedList = new SortedList ();

module.exports = SortedList;


