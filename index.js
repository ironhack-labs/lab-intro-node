class SortedList {

  constructor() {
    this.items = []; 
    this.length = 0; 
  }



  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a.b)
    this.length = this.item.length; 
  }

  get(pos) {
    if ( pos < this.length){
      return this.item[pos]
    } else {
      throw new Error('OutOfBounds');
    }
  } 

  max() {
    if ( this.length === 0){
      throw new Error ('EmplySortedList');
    } else {
      const max = this.item.reduce((a,b) => a-b)
    }

  }

  min() {
    if ( this.length === 0){
      throw new Error ('EmplySortedList');
    } else {
      const max = this.item.reduce((a,b) => a+b)
    }

  }

  sum() {
    const sum = this.item.reduce((a,b) => a+b, 0)
    return sum; 
  }

  avg() {
    if ( this.length === 0){
      throw new Error ('EmplySortedList');
    } else {
      const avg = this.sum() / this.length
      return avg
    }

  }
}

module.exports = SortedList;
