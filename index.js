class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort( (a,b) => { return a - b} );
  }

  get(pos) {
    let res = this.items.indexOf(pos)
    if(res === -1) throw new Error('OutOfBounds');
    else return res;
  }

  max() {
    if(this.items.length === 0) throw new Error('EmptySortedList');
    else {
      let arr = this.items.sort((a,b) => {return b - a})
      return arr[0];
    }
  }

  min() {
    if(this.items.length === 0) throw new Error('EmptySortedList');
    else {
      let arr = this.items.sort((a,b) => {return a - b})
      return arr[0];
    }
  }

  sum() {
    const suma = this.items.reduce((pv,cv) => pv + cv, 0);
    return suma;
  }

  avg() {
    if(this.items.length === 0) throw new Error('EmptySortedList');
    else {
      const suma = this.sum();
      return suma/this.items.length;
    }
  }
}

module.exports = SortedList;
