class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length;
    }
    add(item) {
      this.items.push(item);
      this.items.sort((a,b)=> a-b)
      this.length += 1;
    }
    get(pos) {
      let a = this.items[pos];
      return a;
    }
    max() {
      if (!this.length) throw new Error("EmptySortedList");
      else {
        let max = this.items[0];
        for(let i = 0; i < this.items.length; i++) {
          if (this.items[i] > max) max = this.items[i]}
        return max;
        }
      }

    min() {
      if (!this.length) throw new Error("EmptySortedList");
      else return Math.min(...this.items);
    }
    average() {
      if (!this.length) throw new Error("EmptySortedList");
      else {let avg = (this.items.reduce((acc, cv) => acc + cv))/this.length;
        return avg};
    }
    sum() {
      if (!this.length) return 0;
      else {let sum = this.items.reduce((acc, cv) => acc + cv);
        return sum};
    }
    };
    
  module.exports = SortedList;