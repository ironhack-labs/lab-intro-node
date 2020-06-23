class SortedList {
  constructor(items,length) {
    //const list = new SortedList();
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(((a, b)=> a-b));

  }

  get(pos) {

    let num = this.items[pos];
    
    if(num){
      return this.items[pos];
    } else { 
      throw new Error ('OutOfBounds');}

  }

  max() {
    if (this.items.length === 0) {
    throw new Error('EmptySortedList');
    }

  const maxValue = Math.max(...this.items);
  
  return maxValue;
    
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
      }
  
    const minValue = Math.min(...this.items);
    
    return minValue;
  }

  sum() {
    const sum = this.items.reduce((a, b) => a + b,0);
    return sum;

  }

  avg() {
    
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
      }
    let sum = 0;
    for (let i =0; i < this.items.length; i ++){
    sum += this.items[i];
      } 
    return sum / this.items.length
    
  }
}

module.exports = SortedList;
