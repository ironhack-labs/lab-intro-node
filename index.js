class SortedList {
  constructor() {
    this.items=[]
    this.length=this.items.length
  }
  add(item) {
    this.items.push(item) 
    this.items.sort((a,b)=>{
      return a-b
    })
    this.length++
  }
  get(pos) {
    if(pos>this.length || pos<0){
      throw new error('OutOfBounds')
    } 
    return this.items[pos]
  }

  max() {
    if(this.length===0){
      throw new Error('EmptySortedList')
    }
    return this.items[this.length-1]
  }

  min() {
    if(this.length===0){
      throw new Error('EmptySortedList')
    }
    return this.items[0]
  }

  sum() {
    let sum = 0
    this.items.forEach((element) => {
      sum = sum + element
    })
    return sum 
  }

  avg() {
    if(this.length===0){
      throw new Error('EmptySortedList')
    }
    let average = this.sum()/this.length
    return average
  }
}

module.exports = SortedList;
