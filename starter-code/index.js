class SortedList {
  constructor() {
    this.item = [];
  }

  get length() {
    return this.item.length;
  }

  add(x) {
    this.item.push(x);
    this.item = this.item.sort((a, b) => a - b);
    this.length;
  }

  get(pos) {
    if (this.item.length > 0) {
      return this.item[pos];
    } else {
      throw new Error("OutOfBounds");
    }
  }

  max() {
    if (this.length !== 0) {
      return this.item[this.length -1]
    }else{
    throw new Error("EmptySortedList")
    }
  }

  min() {
    if(this.length !==0) {
      return this.item[0]
    }else{
      throw new Error("EmptySortedList")
      }
  }
  average() {
    if(this.length === 0) {
      throw new Error("EmptySortedList");
  }else{
    return this.sum()/this.length;
  }
}

  sum() {
    if(this.length === 0) {
      return 0;
    } else{
      return this.item.reduce((acc, val) =>  acc + val, 0);
    }
  }
}

module.exports = SortedList;
