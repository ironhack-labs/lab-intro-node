class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    
    this.items.sort((a, b) => {
      if(a <= b)
        return -1
      else
        return 1
    });
    
    this.length = this.items.length;
  }

  get(pos) {
    if(pos >= this.length)
      throw new Error('OutOfBounds');
    
      return this.items[pos];
  }

  max() {
    if(this.length === 0)
      throw new Error('EmptySortedList');
    
    return Math.max(...this.items);
  }

  min() {
    if(this.length === 0)
      throw new Error('EmptySortedList');
    
    return Math.min(...this.items);}

  sum() {
    return this.items.reduce((tot, nextNumber) => tot + nextNumber, 0);
  }

  avg() {
    if(this.length === 0)
      throw new Error('EmptySortedList');
      
    return this.sum()/this.length;
  }
}

module.exports = SortedList;
