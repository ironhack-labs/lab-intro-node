class SortedList {
  constructor() {
  this.items = []
  this.length = 0
  }
  
  add(item) {
    const array = this.items
    array.push(item)
    this.length++
    array.sort((num1, num2)=>{
    return num1 - num2
    })
  }

  get(pos) {
    const array = this.items
    if (typeof this.items[pos] === 'undefined'){
      throw new Error('OutOfBounds')
    }else{
      return this.items[pos]
    }
  }

  max() {
    if (this.length === 0) throw new Error('EmptySortedList')
      let max = 0
      this.items.forEach((item =>{
        if (item>max)max = item
      }))
      return max
  }

  min() {
    if (this.length === 0) throw new Error('EmptySortedList')
    let min = 0
    this.items.forEach((item =>{
      if (item<min)min = item
    }))
    return min
  }

  sum() {
    

  }

  avg() {
    if(this.length === 0) throw new Error('EmptySortedList')
  }

}





module.exports = SortedList;
