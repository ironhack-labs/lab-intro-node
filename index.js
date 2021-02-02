class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => {
      return a-b
    })
    
    this.length = this.items.length
     
  }

  get(pos) {
      if(pos > this.items.length -1 || pos < 0) {
          throw new Error('OutOfBounds')
      } else {
       return this.items[pos]
        }
}

  max() {
    if(!this.items.length) {
      throw new Error('EmptySortedList')
    } else {
     return this.items.reduce((a,b) => {
       return Math.max(a,b)
     })
    }
  }

  min() {
    if(!this.items.length) {
      throw new Error('EmptySortedList')
    } else {
      return this.items.reduce((a,b) => {
        return Math.min(a,b)
      })
     }
   }
    
  sum() {
    if(!this.items.length) {
    return 0
  } else {
  return this.items.reduce((a,b)=> {
    return a+b
  },0)
  }}

  avg() {
    if(!this.items.length) {
      throw new Error('EmptySortedList')
    } else {
      return (this.sum()/this.length)
  }
}
}

module.exports = SortedList;
