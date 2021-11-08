class SortedList {
  constructor() {
    this.items = []
    this.length = 0


  }
  
  add(item) {

    this.items.push(item)
    this.items.sort((a,b)=>{
    return a-b
    })
    this.length = this.items.length
  }

  get(pos) {
    if(pos < this.items.length){
      return this.items[pos]
    }else{
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if(this.items.length === 0){
    throw new Error('EmptySortedList')
  }else{
    // return Math.max(...this.items)
    return this.items.slice(-1)
    
  }
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList')
    }else{
      return Math.min(...this.items)
      // return this.items.slice(0)
      
    }
  }

  sum() {
    if(this.items.length === 0){
      return 0
    }else{
      return this.items.reduce((a,b) => a + b, 0)
      
    }

  }

  avg() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList')
    }else{
      return this.items.reduce((a,b) => a + b, 0)/this.items.length
      // return this.items.slice(0)
      
    }

  }
}

module.exports = SortedList;
