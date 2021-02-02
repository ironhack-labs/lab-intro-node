class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length 
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length 
    this.items.sort(function(a, b){return a-b});
  }

  get(pos) {
    if(this.items.length<pos){
      throw new Error('OutOfBounds')
    }else{
      return this.items[pos]
    }
  }

  max() {
    // this.items != 0? Math.max(...this.items): throw new Error('EmptySortedList')
    if(this.items.length != 0){
      return Math.max(...this.items)
    }else{
      throw new Error('EmptySortedList')
    }
  }

  min() {
    if(this.items.length != 0){
      return Math.min(...this.items)
    }else{
      throw new Error('EmptySortedList')
    }
  }

  sum() {
    if(this.items.length != 0){let sum = this.items.reduce((a,b)=>{
      return a+b
    })
    return sum
  }else{
    return 0
  }
  }

  avg() {
    let sum = this.items.reduce((a,b)=>{
      return a+b
    })
    let avg = sum/this.items.length
    return avg
  }
}

module.exports = SortedList;
