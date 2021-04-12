class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
  }

  get(pos) {
   if(pos > this.items.length){
     throw new Error('OutOfBounds');
   } else {
     return this.items[pos]
   }
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      let highestValue = this.length -1
      return this.items[highestValue]
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.items[0]
    }
  }

  sum() {
    const sum = this.items.reduce((acc, element)=>{
      return acc + element
    }, 0)
    return sum
  }

  avg() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {

      const sum = this.items.reduce((acc, element)=>{
        return acc + element
      }, 0)
      return sum / this.items.length
     
    }
  }
}

module.exports = SortedList;
