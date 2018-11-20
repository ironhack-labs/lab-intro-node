class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }
  add(item) {
    this.length++
    this.items.push(item)
    this.items.sort(function(a, b){
     return (a - b) 
    })
  }
  get(pos) {
    if( pos < 1 || pos > this.length){
      return new Error('OutofBounds')
    }else{
   return this.items[pos-1]
    }
  }
  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList')
    }else{
      return Math.max(...this.items)
    }
  }
  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList')
    }else{
      return Math.min(...this.items)
    }
  }
  average() {
    if(this.length === 0){
      throw new Error('EmptySortedList')
    }else{
      let added = 0;
      this.items.forEach(function(item){
        return added += item;
      })
      return added/this.length;
    }
  }
  sum() {
    if(this.length === 0){
      return 0
    }else{
    let itemsSum = 0;
    this.items.forEach(function(x){
      return itemsSum += x;
    })
  }
  }
};

module.exports = SortedList;
