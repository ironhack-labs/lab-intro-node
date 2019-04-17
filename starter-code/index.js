class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length += 1;
    this.items.sort(function(a, b){ return a - b }); 
  }

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      const maximo = this.items.reduce(function(acc, e){
        acc = Math.max(acc, e);
        return acc;
      });
      return maximo;
    }
  }
  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      const minimo = this.items.reduce(function(acc, e){
        acc = Math.min(acc, e);
        return acc;
      });
      return minimo;
    }
  }

  average() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      const total = this.items.reduce((acc, i) => acc + i);
      return total / this.items.length;
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    }
    //this.items.add();
    const total = this.items.reduce((acc, e) => acc + e);
    return total;
  }
}

module.exports = SortedList;
