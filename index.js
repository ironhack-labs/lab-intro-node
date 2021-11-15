class SortedList {
  constructor(items, length) {
    this.items = items;
    this.length = length;
  }

  add(item) {
    //Clonamos el nuevo arreglo y agregamos el nuevo item
    // const newArray = [...this.items];
    //agregamos elemento al array
    this.items.push(item);
    //ordenamos de manera ascendente
    const sortArray = this.items.sort((a, b) => {
      return a - b;
    });
    //actualizamos la propiedad de la longitud
    this.length = sortArray.length;
    return sortArray;
  }

  get(pos) {
    //lanzar error en caso de que no se encuentre el indice
    if (pos >= this.length || pos < 0) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.max(...this.items);
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items);
  }

  sum() {
    const suma = this.items.reduce((acumulador, currentValue) => {
      return acumulador + currentValue;
    }, 0);
    return suma;
  }

  avg() {
    const promedio = this.sum() / this.length;
    return promedio;
  }
}

module.exports = SortedList;

//Creamos instancia
const items = [2, 5, 7];
const array = new SortedList(items, items.length);
array.add(6);
array.get(2);
array.max();
array.min();
array.sum();
array.avg();
