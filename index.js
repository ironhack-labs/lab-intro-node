class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.length;
  }

  get(pos) {
    if (pos >= this.items.length) {
      throw new Error("EmptySortedList");
    }

    return this.items.indexOf(pos);
  }

  /*La nueva sintaxis extendida es una manera más corta de escribir la solución con apply para obtener el máximo de un arreglo: Sin embargo, tanto la sintaxis extendida (...) como apply fallarán o retornarán un resultado incorrecto si el arreglo tiene demasiados elementos, porque intentan pasar el arreglo de elementos como parámetros de función. Ver apply y funciones incorporadas para más detalles. La solución con reduce no tiene este problema.*/
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }

    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((a, b) => a + b, 0);
  }

  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return sum() / this.length;
  }
}

module.exports = SortedList;
