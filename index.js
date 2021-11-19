class SortedList {
  constructor(items,length) {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b){return a - b})
    this.length = this.items.length
  }

  get(pos) {
  //this.items.lenght[pos]
    if(pos < this.length){
      return this.items[pos]
    }else{
      throw new Error('OutOfBounds');
    }
    
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
     return this.items[this.items.length - 1]
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
     return this.items[0]
    }
  }

  sum() {
    let sum = 0
    for(let i of this.items) sum+=i
    return sum
  }

  avg() {
    if(this.items.length === 0){
      error
       }else{
    let sum = 0
    for(let i of this.items) sum+=i
    return sum/ this.items.length
       }
  }
}

module.exports = SortedList;
