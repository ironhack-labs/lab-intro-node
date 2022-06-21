class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a-b)
    this.length = this.items.length
  }

  get(pos) {
    if(pos > this.items.length){
      throw new Error('Out of bounds')
    }
    return this.items[pos]
  }

  max() {
    if(this.length ==0){
      throw new Error('EmptySortedList');
    }
    let max=0;
    for (let i = 0; i < this.length; i++) {
      if(this.items[i]>max){
        max = this.items[i]
      } 
    }
    return max
  }

  min() {
    if(this.length ==0){
      throw new Error('EmptySortedList');
    }
    let min = 99999;
    for (let i = 0; i < this.length; i++) {
      if(this.items[i]<min){
        min = this.items[i]
      } 
    }
    return min
  }

  sum() {
    if(this.length ==0){
      return 0
    }
    return this.items.reduce((sum,element)=> sum+element)
  }

  avg() {
    if(this.length ==0){
      throw new Error('EmptySortedList');
    }
    return this.sum()/this.length
  }
}

module.exports = SortedList;
