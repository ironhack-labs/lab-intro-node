class SortedList {
  constructor(items) {
    this.items = items;
    this.length = this.items.length;
    this.soma;
  }

  add(item) {
    let count = this.length;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items.length === 0) {
        this.items.push(item);
        this.length = this.length + 1;
        break;
      }
      if (this.items[i] > item) {
        this.items.splice(i - 1, 0, item);
        this.length = this.length + 1;
        count = count + 1;
        break;
      } if (count === this.length && i === this.length - 1) {
        this.items.push(item);
        this.length = this.length + 1;
        break;
      }
    }
  }

  get(pos) {
    for (let i = 0; i < this.items.length; i++) {
      if (pos > this.items.length - 1) {
        throw new Error("OutOfBounds");
      }
      if (i === pos) {
        return this.items[i];
      }
    }
  }

  max() {
    let maximo;
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      for (let i = 0; i < this.length; i++) {
        if (i === 0) {
          maximo = this.items[i];
        } else if (this.items[i] > maximo) {
          maximo = this.items[i];
        }
      }
      return maximo;
    }
  }

  min() {
    let minimo;
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      for (let i = 0; i < this.length; i++) {
        if (i === 0) {
          minimo = this.items[i];
        } else if (this.items[i] < minimo) {
          minimo = this.items[i];
        }
      }
      return minimo;
    }

  }

  sum() {
    this.soma = 0;
    this.items.forEach(element => {
      this.soma = this.soma + element;
    });
    return this.soma;

  }

    avg() {
      return this.soma/this.length;

    }
}

module.exports = new SortedList();
const list = new SortedList([6, 5]);
list.add(7);
console.log(list);
list.get(1);
list.max();
list.min();
list.sum();
list.avg();

