class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    let start = 0;
    let end = this.items.length

    while(start < end) {
      let mid = Math.floor((start + end) / 2);
      if(this.items[mid] < item) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
    this.items.splice(start, 0, item);
    this.length = this.items.length
  }
  
  get(pos) {
    if(pos < 0 || pos >= this.items.length) throw new Error('OutOfBounds')
    return this.items[pos]
  }

  max() {
    if(this.items.length == 0) throw new Error("EmptySortedList");
    return this.items[this.items.length - 1];
  }

  min() {
    if(this.items.length == 0) throw new Error("EmptySortedList");
    return this.items[0];
  }

  sum() {
    if(this.items.length == 0) return 0;
    return this.items.reduce((currItem, acc) => acc + currItem, 0)
  }

  avg() {
    if(this.items.length == 0) throw new Error("EmptySortedList");
    return this.items.reduce((currItem, acc) => acc + currItem, 0) / this.items.length;
  }
}

module.exports = SortedList;

