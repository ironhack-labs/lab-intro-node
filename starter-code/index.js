class SortedList {
    constructor() {
      this.items = []
      this.length = 0
    }
    add(item) {
      this.length++
      this.items.push(item)
      this.items.sort((a,b)=> a-b)
    }
    get(pos) {
      if (pos > this.length - 1){
        throw new Error('OutOfBounds')
      }
      return this.items[pos]
    }

    max() {

      if (this.length == 0){
        throw new Error('EmptySortedList')
      }
      this.items.sort((a,b)=> b-a)
      return this.items[0]

    }
    min() {
      if (this.length == 0){
        throw new Error('EmptySortedList')
      }
      this.items.sort((a,b)=> a-b)
      return this.items[0]
    }
    average() {
      if(this.length == 0) {throw new Error('EmptySortedList')}
      return this.sum()/this.length
    }
    sum() {
      if(this.length == 0) return 0
      let sum = 0
      this.items.forEach(element => {
        sum+=element
      });
      return sum
    }
  };
  
  module.exports = SortedList;