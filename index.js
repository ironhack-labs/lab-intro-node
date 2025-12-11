
// Esta clase SortedList es básicamente una lista de números que siempre se mantiene ordenada sola.
class SortedList {
  // El constructor arranca la lista vacía y el length en 0
  constructor() {
    this.items = [];
    this.length = 0;
  }

  // Puedes agregar números y automáticamente se acomodan de menor a mayor.
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  // Si pides una posición que no existe, te avienta un error.
  get(pos) {
    if (pos < 0 || pos >= this.items.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  // Saca el mayor de la lista, pero si está vacía, error.
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length - 1];
  }

  // Saca el menor de la lista, pero si está vacía, error.
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  // Suma todos los elementos. Si está vacía, regresa 0.
  sum() {
    return this.items.reduce((acc, val) => acc + val, 0);
  }

  // Saca el promedio. Si está vacía, error.
  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.items.length;
  }
}

module.exports = SortedList;
