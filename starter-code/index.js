class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos>this.length) {throw new Error("OutOfBounds");}
    return this.items[pos]
  }

  max() {
    if (this.length == 0) {throw new Error("EmptySortedList");}
    let max = 0;
    this.items.forEach(e => { if (e>max) {max = e;}})
    return max;
  }

  min() {
    if (this.length == 0) {throw new Error("EmptySortedList");}
    let min = this.max();
    this.items.forEach(e => { if (e<min) {min = e;}})
    return min;
  }

  sum() {
    let sum = 0;
    this.items.forEach(e => {
      sum += e;
    })
    return sum;
  }

  avg() {
    if (this.length == 0) {throw new Error("EmptySortedList");}
    return this.sum()/this.length;
  }
}

module.exports = SortedList;
