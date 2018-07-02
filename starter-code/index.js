class SortedList {
  constructor () {
    this.items = [];
    this.length = 0;
  }

  add(x) {
    this.items.push(x);
    this.length++;
    this.items.sort((a, b) => a - b);
  } 

  get(n) {
    return this.items[n-1];
  }

  max() {
    return this.items[this.items.length-1];
  }

  min(){
    return this.items[0];
  }

  average(){
    return this.sum()/this.length;
  }

  sum(){
    return this.items.reduce((acc,e) => acc + e ,0);
  }

}

module.exports = SortedList;
