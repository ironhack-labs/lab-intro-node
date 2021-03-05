class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item); //adicionar um novo item

    //esse array deve estar organizado em ordem crescente
    this.items.sort((a, b) => a - b);

    this.length = this.items.length;
    //manter o length atualizado
  }

  get(pos) {
    //garante que seja ordem crescente porque está chamando o add(item) que faz essa coisa
    if (this.items[pos]) return this.items[pos];
    throw new Error("OutOfBounds");
  }

  //retornar o valor mais alto da matriz
  max() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[this.length - 1]; //-1 quer dizer que estou pegando sempre o último elemento do meu array que é sempre o maior
  }

  min() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.items[0]; //quer o menor então vai ser sempre o primeiro item
  }

  sum() {
    return this.items.reduce(
      (acc, number) => acc + number,
      0 //retornar 0 se for um array vazio
    );
  }

  //média
  avg() {
    if (this.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum() / this.length; //pego a soma e divido pela quantidade de elementos que tem dentro
  }
}

module.exports = SortedList;
