class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b );
    this.length = this.items.length;
  }

  get(pos) {
    if(pos < 0 || pos > this.items.length  ){
      throw new Error('OutOfBounds');
    } else
    return this.items[pos]
  }

  max() {
    if(this.items.length) {
      return this.items.reduce((acumulador, atual) => Math.max(acumulador, atual))
    } else{
    
      throw new Error('EmptySortedList');
    
    }
  }

  min() {
    if(this.items.length) {
      return this.items.reduce((acumulador, atual) => Math.min(acumulador, atual))
    } else{
    
      throw new Error('EmptySortedList');
    
    }

  }

  sum() {
    
      return this.items.reduce((acumulador, atual) => (acumulador + atual), 0)
    
  }

  avg() {
    if(this.items.length) {
      return this.sum() / this.items.length
    } else{
    
      throw new Error('EmptySortedList');
    
    }

  }
}

module.exports = SortedList;
