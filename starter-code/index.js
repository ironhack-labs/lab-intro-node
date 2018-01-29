class SortedList {
  constructor () {
    this.items = [];
    this.length = 0;
  }
  get (pos){
    if (this.items[pos-1] == '') {return;}
    return this.items[pos-1];
  }
  add (x) {
    this.items.push(x);
    this.length++;
    this.items.sort((a,b) => a - b);
  }
  
  max () {
    let OrderedList = this.items.sort((a,b) => b - a);
    return OrderedList[0];
  }
  min () {
    let OrderedList = this.items.sort((a,b) => a - b);
    return OrderedList[0];
  }
  sum () {
    if (this.length <= 0) return;
    return this.items.reduce((acc, elem) => acc + elem);
  }
  average () {
    return this.sum() / this.length;
  }
};

module.exports = SortedList;

