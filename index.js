
class SortedList {
  constructor(items, length) {
    this.items= [];
    this.length= this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b);
    this.length= this.items.length;
    
  }

  get(pos) {
    if(pos <= this.items.length){
      return this.items[pos]
  } else{
    throw new Error('OutOfBounds');
  }}

  max() {
    if(this.items==0){
      throw new Error('EmptySortedList');
  } else {
    return Math.max.apply(null, this.items)
  }}

  min() {
    if(this.items==0){
      throw new Error('EmptySortedList');
  } else {
    return Math.min.apply(null, this.items)
  }
  }

  sum() {
    return this.items.reduce((acumulador, valorActual)=> acumulador + valorActual, 0)
  }

  avg() {
    if(this.items.length==0){
      throw new Error('EmptySortedList');
    }else{
      return this.items.reduce((acumulador, valorActual)=> acumulador + valorActual, 0)/this.items.length
    }
    
  }
}

module.exports = SortedList;

