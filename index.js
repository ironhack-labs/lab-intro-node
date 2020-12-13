class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
      this.items.push(item)
      this.items.sort((a,b)=> a - b)  
      this.length = this.items.length 
  }
 
  get(pos) {
    if(this.items.indexOf(pos) === -1){
      throw new Error('OutOfBounds')
    } else {
      return this.items[pos]
    }
  
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList')
    } else {
      this.items.sort((a,b)=> a - b)
      return this.items[this.items.length-1]
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList')
    } else {
      this.items.sort((a,b)=> b - a)
      return this.items[this.items.length-1]
    }
  }

  sum() {
    return this.items.length !== 0 ? this.items.reduce((v,i)=> v+i) : 0
  } 
    
  avg() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList')
    } else {
    return this.sum() / this.items.length
    }
  }
};

module.exports = SortedList;
