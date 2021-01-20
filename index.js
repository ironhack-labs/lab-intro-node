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
    // si es válido que devuelva el número del indice 

    // si no es válido devuelva la excepción

    if (this.items.length - 1 >= pos) {
      return this.items[pos]
    } else { throw new Error('OutOfBounds') };

  }

  max() {
    // devolver el valor más alto de la matriz.
    // SortedList vacía, debe lanzar un error 
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
 
  }


min() {
  // devolver el valor más bajo de la matriz.
    // SortedList vacía, debe lanzar un error 
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);

 }

sum() {
  // sumar
  //retornar 0
  if (this.length === 0) {
    return 0;
  }
  return this.items.reduce((n1, n2) => n1 + n2);
 }

avg() {
  // sacar porcentaje
  //retornar error
  if (this.length === 0) {
    throw new Error("EmptySortedList");
  }
  return this.sum() / this.length;
 }
}

module.exports = SortedList;
