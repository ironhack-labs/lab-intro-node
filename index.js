class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
    

  add(item) {
    this.items.push(item)
    this.length++
    this.items.sort(function(a,b){return a-b})
  }

  get(pos) {
    if(this.length< pos){
      throw new Error('OutOfBounds') 
    }
      return this.items[pos]  
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList')
    }

    let max = 0
    this.items.forEach(function(element){
      if(element > max){
        max = element
      }
    })
    return max
  }

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList')
    }
    let min = 1000000
    this.items.forEach(function(element){
      if(element < min){
        min = element
      }
    })
    return min
  }

  sum() {
    let sum = 0
    this.items.forEach(function(element){
      sum+=element
      
    })
    return sum
  }

  avg() {
    if(this.length === 0){
      throw new Error('EmptySortedList')
    }
    return this.sum()/this.length
  }
}

module.exports = SortedList;
