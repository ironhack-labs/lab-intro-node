class SortedList {
  constructor() {
   this.items = [];
   this.length = this.items.length;
  }

  add(item) {
    this.length = this.items.push(item);
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos >= 0 && pos < this.length)
    return this.items[pos] 
    else
    throw new Error("OutOfBounds")

  }

  max() {
    if (this.length === 0) {
    throw new Error("EmptySortedList");
    } else {
    return Math.max(...this.items)
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
      } else {
      return Math.min(...this.items)
      }
  }

  sum() {
    if (this.length === 0) {
      return 0
    } else {
      return this.items.reduce((total, indx) => {
        return total + indx}, 0)
      }
    }
  

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
      } else {
      return this.sum()/this.length
      }
  }

}
const newList = new SortedList();

module.exports = SortedList;
