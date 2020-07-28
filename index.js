class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>{
      return a - b;
    });
    this.length ++;
    return this.items;
  }

  get(pos) {
      if(this.items[pos]) return this.items[pos]
      else throw new Error('OutOfBounds');
  }

  max() {
    if(this.items.length !=0) return this.items[this.items.length - 1]
    else throw new Error('EmptySortedList');
  }

  min() {
    if(this.items.length !=0) return this.items[0]
    else throw new Error('EmptySortedList');
  }

  sum() {
    let sum = this.items.reduce((acc,elem)=>{
        return acc + elem;
    }, 0);
    return sum;
  }
  avg() {
    if(this.items.length !=0) return this.sum()/this.items.length;
    else throw new Error('EmptySortedList');
  }
}

module.exports = SortedList;
