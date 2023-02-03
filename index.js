class SortedList {
  constructor(items = []) {
    this.items = items
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a,b){return a-b})
    return this.items, this.length++
  }

  get(pos) {
    if(this.items.indexOf(pos) != -1){
      return this.items.indexOf(pos)
    }else{
      throw new Error('OutOfBounds');
    }
    
  }

  max() {
    if(this.items.length !== 0){
       return Math.max(...this.items)
    }else if (this.length == 0){
     throw new Error('EmptySortedList');
    }
    
  }

  min() {
    if(this.items.length !== 0){
      return Math.min(...this.items)
   }else if (this.length == 0){
    throw new Error('EmptySortedList');
   }
  }

  sum() {
    const initialValue = 0;
    const sumWithInitial = this.items.reduce(
      (accumulator, currentValue) => accumulator + currentValue,initialValue);
      return sumWithInitial
  }

  avg() {
    if(this.items.length !== 0){
      let average = this.sum() / this.items.length
      return average
    }else if (this.length == 0){
    throw new Error('EmptySortedList');
   }
  }
}

module.exports = SortedList;
