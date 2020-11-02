class SortedList {
  constructor() {
    this.items=[]
    this.length=0
  }
  add(item) {
    this.items.push(item)
    this.items=this.items.sort(function(a,b){return a-b})
    this.length=this.items.length
  }
  get(pos) {
    if(pos>=this.length){
      throw Error(`OutOfBounds`);
    } else {
      return this.items[pos]
    }
  }
  max() {
    if(this.length==0){
      throw Error(`EmptySortedList`)
    } else {
      return this.items[this.length-1]
    }
  }
  min() {
    if(this.length==0){
      throw Error(`EmptySortedList`)
    } else {
      return this.items[0]
    }
  }
  sum() {
    if(this.length==0){
      return 0
    } else {
      let sum=0
      for (let i = 0; i < this.length; i++) {
        sum+=this.items[i]
        
      }
      return sum
    }
  }
  avg() {
    if(this.length==0){
      throw Error(`EmptySortedList`)
    } else {
      return this.sum()/this.length
    }
  }
}

module.exports = SortedList;

const sortedList= new SortedList

sortedList.add(30)
sortedList.add(20)
sortedList.add(100)
sortedList.add(200)
sortedList.add(10)

console.log(sortedList.sum())

