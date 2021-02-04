class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.unshift(item);
    this.items.sort((a,b)=>a-b);
    this.length=this.items.length;
  }
    
  get(pos) {
    
    if (this.items.length>pos){
      let getElement = this.items[pos]
      return getElement;
    } else {
      throw new Error('OutOfBounds');
    }
    

  }

  max() {
    if (this.items.length===0){
      throw new Error('EmptySortedList');
    } else {
      this.items.sort((a,b)=>a-b)
      return this.items[this.length -1]
  }
  }

  min() {
    if (this.items.length===0){
      throw new Error('EmptySortedList');
    } else {
      this.items.sort((a,b)=>a-b)
      return this.items[0]
    }
  }

  sum() {
    if (items.length===0){
      return 0 ;
    } else {
       this.items.reduce(function(acc,cv){
        return acc + cv})
       } 
  }

  

  avg() {
    if (items.length===0){
      throw new Error('EmptySortedList');
    } else {
      let sumNumbers = this.items.reduce(function(acc,cv){
        return acc + cv})}
        let avgNumbers = sumNumbers/this.items.length
        return avgNumbers
    }
  }
}

module.exports = SortedList;
