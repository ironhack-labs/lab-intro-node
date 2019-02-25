class SortedList {
  
  constructor(items, length) {
  this.items = []
  this.length = this.items.length
  };

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort( (a, b) => a - b);  } 
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if(this.items[this.items.length-1]) return this.items[this.items.length-1] 
    else throw new Error("EmptySortedList")
  }
  min() {
    if(this.items[this.items.length-1]) return this.items[0]
    else throw new Error("EmptySortedList")
  }
  average() {
    if(this.items[this.items.length-1]) return this.sum()/this.items.length
    else throw new Error("EmptySortedList")
  }
  sum() {
    if(this.items[this.items.length-1]) return this.items.reduce((a,b) => a + b)
    else return 0
  }
};

module.exports = SortedList;

const sortedList = new SortedList()


