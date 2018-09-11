class SortedList {
  constructor() {
    this.items = []
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.updateLength()
    this.items.sort((a,b)=> a-b)
  }
  updateLength() {
    this.length = this.items.length
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    } else {
      let max = this.items[0]
      this.items.forEach(e => {
        if (e > max){
          max = e;
        }
      });
      return max;
    }
  }
  min() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    } else {
      let min = this.items[0]
      this.items.forEach(e => {
        if (e < min){
          min = e;
        }
      });
      return min;
    }
  }
  average() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    } else {
      return this.items.reduce((acc,e)=> acc + e)/this.items.length;
    }
  }
  sum() {
    if (this.items.length === 0){
      return 0;
    } else {
      return this.items.reduce((acc, e)=> acc + e)
    }
  }
};

module.exports = SortedList;
