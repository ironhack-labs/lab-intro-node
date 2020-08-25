
class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.items.sort().push(item)
}

get(pos) {
    if(pos > this.items.length){
        throw new Error('OutOfBounds');
      }else{
        return this.items[pos]
    }
 }

  max() {
      if(this.items.length == 0){
        throw new Error('EmptySortedList');
      } else {
        Math.max(...this.items)
      }  
  }
  min() {
    if(this.items.length == 0){
        throw new Error('EmptySortedList');
      } else {
        Math.min(...this.items)
      }  
  }

  sum() {
      if(this.items.length == 0){
      return 0
      }else{
      this.items.reduce(function(a, b){ 
          return a + b; 
        });
      }
}

    
  avg() {
      if(this.items.length == 0){
        throw new Error('EmptySortedList'); 
      }else {
    let total = 0
    for(let i=0; i<this.items.length; i++){
        total += this.items[i]
    }
    let avg = total/this.items.length
    return avg
   }
  }
}

module.exports = SortedList;
