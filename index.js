class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length += 1;
    if(this.length > 1) return this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if(this.items.length < pos) throw new Error('OutOfBounds');
    return this.items[pos];
    
  }

  max() {
    if(this.items.length === 0) throw new Error('EmptySortedList');
    return Math.max(...this.items);
  }

  min() {
    if(this.items.length === 0) throw new Error('EmptySortedList');
    return Math.min(...this.items);
  }

  sum() {
    let sum = 0;
    if(this.items.length === 0) return 0;
    this.items.forEach(element => {
      console.log(sum += element);
      return sum += element;
    });
  }

  avg() {}
}

module.exports = SortedList;
