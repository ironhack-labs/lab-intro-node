class SortedList {
  constructor() {
    this.items=[];
    this.length=0;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>a-b);
    this.length++;
  }
  get(pos){
    return this.items[pos-1];
  }
  max() {
    if(this.length===0)
      throw new Error("EmptySortedList");
    return this.items[this.length-1];
  }
  min() {
    if(this.length===0)
      throw new Error("EmptySortedList");
    return this.items[0];
  }
  average() {
    if(this.length===0)
      throw new Error("EmptySortedList");
    return this.sum()/this.length;
  }
  sum() {
    let sum=0;
    this.items.forEach((elem)=>sum+=elem);
    return sum;
  }
  Error(mensaje) {
   this.mensaje = mensaje;
   this.nombre = "ExceptionSortedList";
 }
};

module.exports = SortedList;
