class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.sort();
  }

  get(pos) {
    return this.items[pos];
    // this.length;
  }

  max() {
    let res = this.items.length[0];
    for (let i = 1; i < this.items.length; i++) {
      if (this.items[i] > res) {
        res = this.items[i];
      }
    }
    return res;
  }

  min() { }

  average() { }
  
  sum() { }

  sort() {
    this.items.sort((a, b) => a - b);
  }
}

module.exports = SortedList;

let sl = new SortedList();
sl.add(20);
console.log(sl);
sl.add(10);
console.log(sl);
sl.add(30);
console.log(sl);
console.log(sl.get(1));