class SortedList {
    constructor(length, items) {
      this.items = [];
      this.length = this.items.length;
    }

    add(item) {
      this.items.push(item);
      this.items.sort((a,b) => a > b ? 1 : a < b ? -1 : 0);
      this.length = this.items.length;
    }

    get(pos) {
      return this.items[pos];
    }

    max() {
      if (this.items.length === 0) {
        throw new Error("EmptySortedList");
      } else {
        return this.items[this.length-1];
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
        let average = this.sum()/this.length;
        return average;
      }
    }

    sum() {
      if (this.items.length === 0) {
        return 0;
      } else {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
          sum = sum + this.items[i];
        }
        return sum;
    }
  };
}
 module.exports = SortedList;
