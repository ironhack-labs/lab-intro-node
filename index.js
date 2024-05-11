class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    /* this.items.forEach((element, index) => {
      if (element > item) {
        this.items.splice(index, 0, item);
        this.length = this.items.length;
        return;
      } 
    });
    this.items.push(item);
    this.length = this.items.length; */
    this.items.push(item);
    this.items.sort((a,b)=>a-b)
    this.length=this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } return Math.max(...this.items);
    
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } return Math.min(...this.items);
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    return this.items.reduce((acc, currentValue) => acc + currentValue);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } 
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
