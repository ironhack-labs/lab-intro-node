class SortedList {
  constructor(items, length) {
  this.items = []
  this.length =this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a,b){return a-b})
    this.length =this.items.length
  }

  get(pos) {
    
      if (pos >this.length){
        throw new Error('OutOfBounds');
      } else {
       return this.items[pos]
      }
  }
  

  max() {

    if (this.length > 1){
      return Math.max(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
 
    if (this.length > 1){
      return Math.min(...this.items)
    } else {
      throw new Error('EmptySortedList');
    }
  }

  
  sum() {
    
    const total = this.items.reduce(function(acc,curr){
      return acc + curr;
    }, 0)
    return total
    }
    

  avg() {
    if (this.length > 1){
      return this.sum()/this.length
    } else {
      throw new Error('EmptySortedList');
    }
  }
    
  
}

module.exports = SortedList;
