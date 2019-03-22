class SortedList {
  constructor(items,length) {
    this.items = [];
    this.length = this.items.length;
}
  add(item) {
    this.items.push(item);
    this.items.sort((a , b) => a-b);
    this.length = this.items.length;// por que es necesario meterlo aqui? si ya esta en el constructor
  }
  get(pos) {
    return this.items[pos]   
    // se que los errores provienen de aqui, pero no se muy bien como hacerlo, he probado varias cosas 
  }

  max() {
    if (this.items.length==0){
      throw new Error("EmptySortedList")
    }
    else {   
       return Math.max(...this.items);// se mete el spread operator para no tener que ir uno a uno
    }
  }

  min() {
    if (this.items.length==0){
      throw new Error("EmptySortedList")
    }
    else {   
       return Math.min(...this.items);// se mete el spread operator para no tener que ir uno a uno
    }
  }


  average() {// se deberia de poder usar el sum en la funcion no? no deja
    if (this.items.length==0){
      throw new Error("EmptySortedList")
    }
    else {   
      return this.items.reduce((a,b) =>a+b)/this.items.length
  }
  }


  sum() {
    if (this.items.length==0){
      return 0
    }
    else {   
       return this.items.reduce((a,b) =>a+b);// se mete el spread operator para no tener que ir uno a uno
    }
  }
 average() {// se deberia de poder usar el sum en la funcion no? no deja
    if (this.items.length==0){
      throw new Error("EmptySortedList")
    }
    else {   
      return this.items.reduce((a,b) =>a+b)/this.items.length
  }
  }

};


module.exports = SortedList;

