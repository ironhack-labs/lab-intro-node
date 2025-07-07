class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {

    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList");
    } else {
      return Math.max(...this.items); //alternative, reduce method//
    }

  }

  min() {
    if (this.items.length === 0) {
      throw new Error("Empty SortedList")
    } else {
      return Math.min(... this.items);
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
     
      let total = 0;
     
      for (let i = 0; i < this.items.length; i++) {
        total = total + this.items[i];
      }
      return total;
    }

  }
  avg() {
     if (this.items.length === 0) {
      throw new Error("Empty SortedList")
    } else {
      const total = this.sum();
      return total/this.items.length;
    }
    
   }
}

module.exports = SortedList;
