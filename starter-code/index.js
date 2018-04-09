class SortedList {
  constructor () {
    this.items = [];
    this.length = 0;
  }

  add(x) {
    this.items.push(x);
    this.length = this.items.length;
    this.items.sort(function(a,b){
      return a-b;
    })
  }

  get(pos) {
    return this.items[pos-1];
  }

  max() {
    return this.get(this.items.length)
  }

  min () {
    return this.get(1)
  }

  average () {
     return Math.floor(this.items.reduce( (acc,a) => acc + (a/this.items.length),0))
  }

  sum() {
    return this.items.reduce( (acc,a) => acc + a,0)
  }
}



var element = new SortedList();

module.exports = SortedList;

