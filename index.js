class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    if(item){
      this.items.push(item)
      this.items.sort((a, b)=>{return a-b})
      this.length ++
    } 
  }

  get(pos) {
    if(pos < this.length+1){
      return this.items[pos -1]
    }else{
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if(this.length > 0) {
      return Math.max(...this.items)
    }
    throw new Error('EmptySortedList')
  }
  min() {
    if(this.length > 0) {
      return Math.min(...this.items)
    }
    throw new Error('EmptySortedList')
  }

  sum() {
    return this.items.reduce((acc, eachNumber)=> {return acc +eachNumber}, 0)
  }

  avg() {
    if(this.length > 0) {
      return this.sum() / this.length
    }
    throw new Error('EmptySortedList')
  }
}

module.exports = SortedList;
