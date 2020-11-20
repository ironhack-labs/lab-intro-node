class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items.indexOf(pos)) {
      return pos;
    }
    return pos
  }

  max() {
    var maxi = this.items.reduce(function (a, b) {
      return Math.max(a, b);
    });
    return maxi;
  }

  min() {
    var mini = this.items.reduce(function (a, b) {
      return Math.min(a, b);
    });
    return mini;
  }

  sum() {
    const suma = this.items.reduce((a, b) => a + b, 0);

    return suma;
  }

  avg() {
    const average = this.items.reduce((a, b) => a + b);

    return average / this.items.length;
  }
}

module.exports = SortedList;
