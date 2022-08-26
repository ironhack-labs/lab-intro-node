class SortedList {
  constructor(items, length) {

    this.items = [];
    this.length = this.items.length;
  }
   

  add(item) {
    this.items.push(item);
    this.length++;
    let sortedArr = this.item.sort( (a,b) => {
      return a-b;
    })
    
  
   return sortedArr;
  }
   
  get(pos) {
    if(pos > this.length){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {

    if(this.length === 0){
      throw new Error('EmptySortedList');
    } 
      return this.items[this.length-1];
    
   
  }
   
  min() {

    if( this.length === 0 ){
      throw new Error('EmptySortedlist')
    } 
    return this.items[0];
  }

  sum() {
    let total = 0;
    for(let i = 0 ; i < this.length; i++){
      total += this.items[i];
    }
    return total;
  }

  avg() {
    let avg =  this.sum()/this.length;
    return avg;
  }
}

module.exports = SortedList;
