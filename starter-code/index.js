class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    return this.length++;
  }

  get(pos) {
    if (this.items.length === 0) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    const max = this.items.map(Number).reduce((a, b) => {
      return Math.max(a, b);
    });
    return max;
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    const min = this.items.map(Number).reduce((a, b) => {
      return Math.min(a, b);
    });
    return min;
  }

  average() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    const total = this.items.reduce((sum, element) => {
      return (sum += element);
    });
    const average = total / this.items.length;
    return average;
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    }
    let total;
    total = this.items.reduce((sum, element) => {
      return (sum += element);
    });

    return total;
  }
}

module.exports = SortedList;

teste = new SortedList();
console.log(teste);
teste.add(10);
teste.add(2);
teste.add(1);
// console.log(teste);

console.log(teste.get(0));
console.log(teste);
