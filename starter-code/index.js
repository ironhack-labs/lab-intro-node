class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort( (a,b) => a-b);
    this.length = this.items.length;
  }
  get(pos) {
    return (pos < this.length ? this.items[pos] : "OutOfBounds");
  }
  max() {
    if (this.length === 0){throw new Error("EmptySortedList")}
    else {
      this.items.sort( (a,b) => a-b);
      return this.items[this.length-1];
    }
  }
  min() {
    if (this.length === 0){throw new Error("EmptySortedList")}
    else {
      this.items.sort( (a,b) => a-b);
      return this.items[0];
    }
  }
  average() {
    if (this.length === 0){throw new Error("EmptySortedList")}
    else {
      return this.items.reduce( (a,b) => a+b )/this.length;
    }
  }
  sum() {
    if (this.length === 0){return 0}
    else {
      return this.items.reduce( (acc,b) => acc+b );
    }
  }
};


module.exports = SortedList;


