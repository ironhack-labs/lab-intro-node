class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a,b){
      return a-b;
    });
  }
  get(pos){
    if(pos <= this.length) return this.items[pos-1];
  }
  max() {
    if(this.length > 0) return Math.max.apply(null,this.items)
    throw new Error("EmptySortedList")
  }
  min() {
    if(this.length > 0) return Math.min.apply(null,this.items)
    throw new Error("EmptySortedList")
  }
  average(){
    if(this.length > 0) return this.sum()/this.length
    throw new Error("EmptySortedList")
  }
  sum() {
    return((this.length > 0) ? this.items.reduce((a,b) => {return a+b}) :  0)
    //El asha me obligó a hacerlo con condicional ternario :(
  }
};

module.exports = SortedList;
