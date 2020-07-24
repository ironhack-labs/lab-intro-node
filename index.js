class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b){return a-b})
    this.length ++
  }

  get(pos) {
    if(pos > this.length-1){
      throw new Error("OutOfBounds")
    } 
    return this.items.indexOf(pos)
  }

  max() {
    if(this.items.length > 0){
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if(this.items.length > 0){
      return Math.min(...this.items)
    } 
      throw new Error('EmptySortedList');
  }

  sum() {

    return (this.items.length > 0) ? this.items.reduce((sum,elem)=>sum+elem) : 0;
    
    // if(this.items.length > 0){
    //   return this.items.reduce((sum,elem)=> sum+elem)
    // }
    //   return 0;
  }

  avg() {
    if(this.items.length > 0){
      return this.sum()/this.items.length
    } else {
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;
