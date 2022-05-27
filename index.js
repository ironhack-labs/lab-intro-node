class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort();
  }

  get(pos) {
    if(pos < 0 || pos >= this.items.length) throw new Error('OutOfBounds');
    else  return this.items[pos];
  }

  max() {
    if(this.items.length === 0) throw new Error('EmptySortedList');
    else return Math.max(...items);
  }

  min() {
    if(this.items.length === 0) throw new Error('EmptySortedList');
    else return Math.min(...items);
  }

  sum() {
    let sum = this.items.reduce((acc,current)=>acc+current);
    return sum;
  }

  avg() {
    let avg = this.items.reduce((acc,current)=>{
      let i = this.items.length;
      return acc+current/i;
    })
  }
}

module.exports = SortedList;
