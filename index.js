class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
    
  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=>{return a-b})
    this.length=this.items.length
  }

  get(pos) {
    if (pos >= 0 && pos<this.items.length){
      return (this.items[pos])
    }else{throw new Error('OutOfBounds')}
  }

  max() {
    if (this.items.length !==0){
      return (this.items[this.items.length-1])
    }else{throw new Error('EmptySortedList')}
  }

  min() {
     if (this.items.length !==0){
      return (this.items[0])
    }else{throw new Error('EmptySortedList')}
  }
  

  sum() {

  }

  avg() {

  }
}

module.exports = SortedList;
