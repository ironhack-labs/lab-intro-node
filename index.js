class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a,b){ 
      return a-b })
    this.length ++
  }
    
  get(pos) {
    if(pos>this.length){
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }
    
  max() {
    this.error()
    return this.items[this.length-1]
  }

  min() {
    this.error()    
    return this.items[0]
  }

  sum() {
    if(this.length === 0){
      return 0
    }
    return this.items.reduce((acc, curr) => {
      return acc + curr
    })
    
  }

  avg() {
    this.error()
    return this.sum()/this.length
  }

  error(){
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
