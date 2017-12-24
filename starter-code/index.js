class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add (item){
    this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
  }
  get (pos){
    return this.items[pos - 1];
  }
  max (){
    return this.items[this.items.length];
  }
  min (){
    return this.items[0];
  }
  average (){
    let sum = this.items.reduce((a, b) => a += b);
    return avg = sum / this.items.length;
  }
  sum (){
    return sum = this.items.reduce((a, b) => a += b);
  }
}
// no me salen todos los tests aprobados pero no sé donde está el error!//

module.exports = SortedList;
