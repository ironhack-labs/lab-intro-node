class SortedList {
  // Constructor: inicializa el arreglo `items` y la propiedad `length`
  constructor() {
    this.items = [];  // Arreglo vacío para almacenar los elementos de la lista
    this.length = 0;  // Propiedad que refleja la cantidad de elementos en la lista
  }

  // Método add: añade un nuevo elemento manteniendo la lista ordenada
  add(item) {
    this.items.push(item);  // Agrega el nuevo elemento al final del arreglo `items`
    this.items.sort((a, b) => a - b);  // Ordena `items` en orden ascendente
    this.length = this.items.length;  // Actualiza `length` al tamaño actual de `items`
  }

  // Método get: obtiene el elemento en la posición `pos`
  get(pos) {
    // Verifica si la posición `pos` es válida
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");  // Lanza un error si `pos` está fuera de los límites
    }
    return this.items[pos];  // Devuelve el elemento en la posición `pos`
  }

  // Método max: devuelve el valor máximo de la lista
  max() {
    if (this.length === 0) throw new Error("EmptySortedList");  // Lanza error si la lista está vacía
    return this.items[this.length - 1];  // Devuelve el último elemento, que es el máximo en una lista ordenada
  }

  // Método min: devuelve el valor mínimo de la lista
  min() {
    if (this.length === 0) throw new Error("EmptySortedList");  // Lanza error si la lista está vacía
    return this.items[0];  // Devuelve el primer elemento, que es el mínimo en una lista ordenada
  }

  // Método sum: calcula la suma de todos los elementos en la lista
  sum() {
    return this.items.reduce((acc, curr) => acc + curr, 0);  // Suma todos los elementos en `items`
  }

  // Método avg: calcula el promedio de todos los elementos en la lista
  avg() {
    if (this.length === 0) throw new Error("EmptySortedList");  // Lanza error si la lista está vacía
    return this.sum() / this.length;  // Calcula el promedio dividiendo la suma entre `length`
  }
}

// Exporta la clase SortedList para que pueda usarse en otros archivos
module.exports = SortedList;

