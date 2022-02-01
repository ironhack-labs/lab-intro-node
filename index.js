class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.length = this.items.push(item)
    this.items.sort((a,b) => {
      if(a<b){
        return -1
      }
    });
  }

  get(pos) {
    if (pos < this.length){
      return this.items[pos]
    }else{
      throw new Error ('OutofBounds')
    }
  }

  max() {
    if( this.items.length === 0){
      throw new Error ('EmptySortedList')
    }else{
      return this.items[this.items.length - 1]
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error ('EmptySortedList')
    } else{
      return this.items[0]
    }
  }

  sum() {
    let summ = 0
    this.items.forEach((number) => {
      sum += number
    })
    return sum
  }

  avg() {
    if(this.items.length === 0){
      throw new Error ('EmptySortedList')
    }
    let sum = this.sum()
    let avg = sum / this.items.length
    return avg
  }
}
let shortedList = new SortedList

module.exports = SortedList;
