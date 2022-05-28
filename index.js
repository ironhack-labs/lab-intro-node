class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {4
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length++; 
  }

  get(pos) {
    if(pos>this.items.length) throw new Error('OutOfBounds');
    return this.items[pos];
  }

  max() {
    if(!this.items.length) throw new Error('EmptySortedList');
    let maxValue = 0;
    for (let i=0; i<=this.items.length; i++) {
      if(maxValue<this.items[i]) maxValue = this.items[i];
    }
    return maxValue;
  }

  min() {
    if(!this.items.length) throw new Error('EmptySortedList');
    let minValue = this.get(0);
    for (let i=0; i<=this.items.length; i++) {
      if(minValue>this.items[i]) minValue = this.items[i];
    }
    return minValue;
  }

  sum() {
    if(!this.items.length) return 0;
    let sum = 0;
    for(let i=0; i<this.items.length; i++) {
      sum+=this.get(i);
    }
    return sum;
  }

  avg() {
    if(!this.items.length) throw new Error('EmptySortedList');
    return this.sum()/this.items.length
  }
}

module.exports = SortedList;
