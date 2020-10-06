class SortedList {
  constructor(items) {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b)=>{
      if (a > b){
        return 1
      } else if ( a < b){
        return -1
      } else {
        return 0
      }
    })
    this.length = this.items.length
  }

  get(pos) {
    if (this.length < pos){
      console.log('error')
      throw new Error('OutOfBounds');
    }
    console.log(this.items[pos])
    return this.items[pos]
  }

  max() {
    if (!this.items.length){
      throw new Error('EmptySortedList')
    }
    this.items.sort((a, b)=>{
      if(a>b){
        return -1
      } else if(a<b) {
        return 1
      } else {
        return 0
      }
    })
    return this.items[0]
  }

  min() {
    if (!this.items.length){
      throw new Error('EmptySortedList')
    }
    this.items.sort((a, b)=>{
      if(a>b){
        return 1
      } else if(a<b) {
        return -1
      } else {
        return 0
      }
    })
    return this.items[0]
  }

  sum() {
    let sum = 0
    this.items.map((elem)=>{
      return sum+=elem
    })
    return sum
  }

  avg() {
    if (!this.items.length) {
      throw new Error('EmptySortedList')
    }
    let avg = 0
    this.items.map((elem)=>{
      return avg+=elem
    })
    return avg/this.items.length
  }
}

module.exports = SortedList;

// Some tests
// let list = new SortedList

// list.add(1)
// list.add(5)
// list.add(2)
// console.log(list.items)
// list.get(4)
