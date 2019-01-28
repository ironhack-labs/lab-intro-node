class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a,b){return a-b});
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if(this.length === 0) throw new Error ("EmptySortedList");
    else return Math.max(...this.items);
  }
  min() {
    if(this.length === 0) throw new Error ("EmptySortedList");
    else return Math.min(...this.items);
  }
  sum() {
    var res = 0;
    for(let i=0; i<this.length; i++){
      res += this.items[i];
    }
    return res;
  }
  average() {
    if(this.length === 0) throw new Error ("EmptySortedList");
    else return (this.sum() / this.length);
  }
};  

module.exports = SortedList;
