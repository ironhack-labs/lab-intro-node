class SortedList {
  constructor (){
    this.items = []
    this.length = this.items.length;
  }

  add(x) {
    this.items.push(x);
    this.items.sort( (a,b) => a - b );
    this.length = this.items.length;
  }
  get(nth) {
    return this.items[nth-1];
  }
  max() {
    return Math.max.apply(Math, this.items);
  }
  min() {
    return Math.min.apply(Math, this.items);
  }
  average() {
    return this.sum() / this.length
  }
  sum(){
    return (this.items.reduce( (acc,e) => acc+=e ,0 ))
  }
}

module.exports = SortedList;
