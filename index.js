class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  
  add(item) {
    
    this.items.push(item);
    this.length =this.items.length;
    this.items.sort((a, b) => a-b);
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds') 
    }else {
      return this.items[pos]
    } 
    }
   
  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList') 
    }else {
      return this.items[this.length - 1]
    } 

  }

  min() {if (this.items.length === 0) {
    throw new Error('EmptySortedList') 
  }else {
    return this.items[0]
  } }

  sum() {
    if (this.items.length === 0) {
      return 0; 
    } else {
      return this.items.reduce((accumulator, currentValue) => accumulator + currentValue);
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return (this.items.reduce((accumulator, currentValue) => accumulator + currentValue))/this.length;
    }

  }
}

module.exports = SortedList;
