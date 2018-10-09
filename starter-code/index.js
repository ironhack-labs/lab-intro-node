class SortedList {
  constructor() {
    this.items = [],
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b)=> a - b);
  }
  get(pos) {
    if(this.length === 0){
      throw new Error("OutOfBounds");
    }else{
      return this.items[pos-1];
    }
  }
  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }else{
      let sorted = this.items.sort((a,b) => b - a);
      return sorted[0];
    }
  }
  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }else{
      let sorted = this.items.sort((a,b) => a - b);
      return sorted[0];
    }
  }
  average() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }else{
      let average = (this.sum()/this.length);
      return average;
    }

  }
  sum() {
    let resultado = 0;
    if (this.length !== 0){
      let suma = this.items.reduce((acc,current) => acc + current);
       resultado = suma;
    }
    return resultado;
  }
};

module.exports = SortedList;
