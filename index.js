class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length

  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {return a-b});
    this.length = this.items.length;
  }

  get(pos) {

    if(this.length< pos){
      throw new Error('OutOfBounds');
    }else 
      return this.items[pos]
  }

  max() {
    let highValue = Math.max(...this.items)
      if(this.items.length === 0){
        throw new Error('EmptySortedList');
      }else{
        return highValue
      }
  }

  min() {
    let highValue = Math.min(...this.items)
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return highValue
    }
  }

  sum() {
    let sum = 0
    for( let i = 0; i< this.items.length; i++){
      sum = this.items[i] + sum
    }
    return sum

  }

  avg() {
    let numberValues = this.items.length
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
      let sum = 0
      for( let i = 0; i< this.items.length; i++){
        sum = this.items[i] + sum
      }
      return sum/numberValues
    }

  }
}

module.exports = SortedList;
