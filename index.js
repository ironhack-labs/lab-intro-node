class SortedList {
  constructor() {
    // Inicializa un array vacío para almacenar elementos y establece la longitud inicial en 0.
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    // Agrega el nuevo elemento al array.
    this.items.push(item);
    
    // Ordena el array en orden ascendente después de agregar un nuevo elemento.
    this.items.sort((a, b) => {
      return a - b;
    });
    
    // Actualiza la propiedad length para reflejar la nueva longitud del array.
    this.length = this.items.length;
  }

  get(pos) {
    // Verifica si la posición especificada está fuera de límites.
    if (pos > this.items.length || pos < 0) {
      // Lanza un error si la posición no es válida.
      throw new Error("FueraDeLímites");
    }
    
    // Devuelve el elemento en la posición especificada.
    return this.items[pos];
  }

  max() {
    // Verifica si el array está vacío.
    if (this.items.length == 0) {
      // Lanza un error si el array está vacío.
      throw new Error("ListaOrdenadaVacia");
    }
    
    // Devuelve el valor máximo (último elemento) en el array ordenado.
    return this.items[this.items.length - 1];
  }

  min() {
    // Verifica si el array está vacío.
    if (this.items.length == 0) {
      // Lanza un error si el array está vacío.
      throw new Error("ListaOrdenadaVacia");
    }
    
    // Devuelve el valor mínimo (primer elemento) en el array ordenado.
    return this.items[0];
  }

  sum() {
    // Verifica si la longitud del array es menor que 0 (lo cual no debería ocurrir).
    if (this.items.length < 0) {
      // Lanza un error si la longitud no es válida.
      throw new Error("error 007");
    }

    // Inicializa una variable para almacenar la suma de todos los elementos.
    let total = 0;
    
    // Itera a través del array y acumula la suma.
    for (let i = 0; i < this.items.length; i++) {
      total += this.items[i];
    }
    
    // Devuelve la suma calculada.
    return total;
  }

  avg() {
    // Verifica si el array está vacío.
    if (this.items.length == 0) {
      // Lanza un error si el array está vacío.
      throw new Error("error");
    }

    // Calcula la suma total de todos los elementos utilizando el método sum().
    const total = this.sum();
    
    // Calcula y devuelve el promedio dividiendo la suma total por la longitud del array.
    return total / this.items.length;
  }
}

// Exporta la clase SortedList para su uso en otros módulos.
module.exports = SortedList;
