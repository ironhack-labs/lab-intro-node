class SortedList {
  constructor() {
    this.length = 0;
    this.items = [];
  }

  add(item) {
    this.items.push(item)
    this.items.sort(compare)
    this.length = this.items.length
  }

  get(pos) {
    if(pos > this.length){
      throw new Error('OutOfBounds')
    }
    return this.items[pos]
  }

  max() {
    let max = 0
    if(this.items.length == 0){
      throw new Error('EmptySortedList')
    }else{
      this.items.forEach(num => {
        if(num > max){
          max = num
        } 
      })
    }
    return max
  }

  min() {
    let min = 10000000000000000000000000
    if(this.items.length == 0){
      throw new Error('EmptySortedList')
    }else{
      this.items.forEach(num => {
        if(num < min){
          min= num
        } 
      })
    }
    return min
  }

  sum() {
    let sum = 0
    let arr = [...this.items]
   arr.reduce((acc, num) =>{
      sum = acc + num
    },0)
    return sum
  }

  avg() {}
}
function compare(a,b){return a-b;}

module.exports = SortedList;
