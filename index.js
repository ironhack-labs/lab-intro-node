class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if(pos in this.items){
        return this.items.indexOf(pos);
    }
        throw new Error('OutOfBounds');
}

  max() {
    
    if(this.items <= 0){
      throw new Error('EmptySortedList');
     }

    let value = 0;
    for(let i= 0; i < this.items.length; i++){
      if(this.items[i] > value){
        value = this.items[i]
      }
      
    }
    return value
  }

  min() {
    if(this.items <= 0){
        throw new Error('EmptySortedList');
       }
    return Math.min(...this.items);
  }

  sum() {
    if(this.items <= 0){
      return 0;
     }
    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  avg() {
     if(this.items <= 0){
       throw new Error('EmptySortedList');
    }
    let total = this.items.reduce((accumulator, currentValue) => accumulator + currentValue);
    return total / this.items.length
  }
}

module.exports = SortedList;
