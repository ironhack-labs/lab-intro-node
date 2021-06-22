class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length += this.items.length
    this.items.sort(function(a,b) {
    return a - b;
  })
  console.log(`sored: ${this.items}`)
  }
  get(pos) {
    
    for (let i = 0; i < this.items.length; i++){
      if(pos == this.items[i]){
        return this.items.indexOf(this.items[i])
      }
      
      
    }
    this.items.filter((item) => item.includes(pos) ? this.items.indexOf(item) : "OutOfBounds")
  }

  max() {
      if(this.items.length > 0){
      return Math.max(...this.items)
      }
      else {
        throw new Error('EmptySortedList');
      }
  }
  

  min() {
    if(this.items.length > 0){
      return Math.min(...this.items)
      }
      else {
        throw new Error('EmptySortedList');
      }

  }

  sum() {
    return  this.items.reduce((a, b) => a + b, 0)
  }

  avg() {
    let sum = this.items.reduce((a, b) => a + b, 0)
    if (sum > 0){
      return sum / this.items.length

    }
    else {
      throw new Error('EmptySortedList');

    }
  }
}

module.exports = SortedList;
