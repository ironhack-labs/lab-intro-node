class SortedList {
  constructor(items, length) {
    this.items = items;
    this.length = length
  }

  add(item) {
    this.items.push(item)
    this.items.sort()
    this.length = this.items.length
  }

  get(pos) {
    if(pos >= this.items.length){
      throw new Error("OutOfBounds")
    } else {
      return this.items[pos]
    }
  }

  max() {
    let lastNumber = this.items.length - 1
    return this.items[lastNumber]
  }

  min() {
    this.items.sort()
    return this.items[0]
  }

  sum() {
    if(this.items.length <= 0){
      return 0
    }
    let sumSortedList = this.items.reduce((sum,element)=>{
      return  sum += element
    },0)
    return sumSortedList 
  }

  avg() {
    let sumSortedList = this.items.reduce((sum,element)=>{
      return  sum += element
    },0)
    return sumSortedList /this.items.length
  }
}

module.exports = SortedList;

console.log(new SortedList)