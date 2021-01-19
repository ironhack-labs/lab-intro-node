class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    //primero función que ordene numeros
    this.items.push(item);
    this.items.sort();

    //acutalizar la length
    this.length = this.items.length;
    

  }

  get(pos) {
 // validar que el indice exista
 
 if(this.items.length-1 >= pos){
   return this.items[pos]
 } else {throw new Error('OutOfBounds')};

 // si es válido que devuelva el número del indice 

 // si no es válido devuelva la excepción

  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;
