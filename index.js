class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos < 0 || pos >= this.items.length) {
      throw new Error("Out of Bounds");
    } else {
      return this.items[pos];
    }
  }
  
  max() {
    const max = Math.max(...this.items);
    return (this.length === 0) ? (() => {throw new Error("EmptySortedList")})() : max; // {} needed since otherwhite arrow function would return something implicitly
  }

  min() {
    const max = Math.min(...this.items);
    return (this.length === 0) ? (() => {throw new Error("Empty SortedList")})() : max; 
  }

  sum() {
    const sum = this.items.reduce((acc,el) => acc + el,0);
    return (this.length === 0) ? 0 : sum;
  }

  avg() {
    const avg = this.sum()/this.length;
    return this.length === 0 ? (() => {throw new Error("EmptySortedList")})() : avg;
  }
}

module.exports = SortedList;
